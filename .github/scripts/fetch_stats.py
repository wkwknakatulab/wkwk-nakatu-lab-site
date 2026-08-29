#!/usr/bin/env python3
"""GoatCounter から統計を取得して stats.json に保存する（デバッグ出力あり）"""
import os, json, urllib.request
from datetime import datetime, timedelta, timezone

SITE  = "nakatu-lab"
TOKEN = os.environ["TOKEN"]
BASE  = f"https://{SITE}.goatcounter.com/api/v0"
JST   = timezone(timedelta(hours=9))


def api(path, params=None):
    url = BASE + path
    if params:
        url += "?" + "&".join(f"{k}={v}" for k, v in params.items())
    req = urllib.request.Request(url, headers={
        "Authorization": f"Bearer {TOKEN}",
        "Content-Type":  "application/json",
    })
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)


def day(d):
    return d.strftime("%Y-%m-%d")


now   = datetime.now(JST)
start = now - timedelta(days=6)

# ===== ここから生データ確認 =====
print("=" * 60)
print("RAW /stats/hits (daily=true)")
print("=" * 60)
raw_hits = api("/stats/hits", {"start": day(start), "end": day(now), "daily": "true"})
print(json.dumps(raw_hits, ensure_ascii=False, indent=1)[:4000])

print()
print("=" * 60)
print("RAW /stats/total")
print("=" * 60)
raw_total = api("/stats/total", {"start": day(start), "end": day(now)})
print(json.dumps(raw_total, ensure_ascii=False, indent=1)[:1500])
print("=" * 60)
# ===== ここまで =====

# とりあえず今のロジックで書き出し（あとで直す）
def total(s, e):
    d = api("/stats/total", {"start": day(s), "end": day(e)})
    return d.get("total_utc") or d.get("total") or 0

per_day = {}
for hit in raw_hits.get("hits", []):
    for s in hit.get("stats", []):
        k = s.get("day")
        if k:
            per_day[k] = per_day.get(k, 0) + (s.get("daily") or 0)

days = [now - timedelta(days=i) for i in range(6, -1, -1)]
week = [{"date": day(d), "label": f"{d.month}/{d.day}", "count": per_day.get(day(d), 0)}
        for d in days]

data = {
    "today":   per_day.get(day(now), 0),
    "month":   total(now.replace(day=1), now),
    "year":    total(now.replace(month=1, day=1), now),
    "total":   total(datetime(2020, 1, 1, tzinfo=JST), now),
    "week":    week,
    "updated": now.isoformat(timespec="seconds"),
}

with open("stats.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=1)
