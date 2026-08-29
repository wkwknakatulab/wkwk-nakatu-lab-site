#!/usr/bin/env python3
"""GoatCounter から統計を取得して stats.json に保存する"""
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


def stats_total(start, end):
    """/stats/total を叩いて (合計, 日別dict) を返す"""
    d = api("/stats/total", {"start": day(start), "end": day(end)})
    total = d.get("total_utc") or d.get("total") or 0
    per_day = {}
    for s in d.get("stats", []):
        k = s.get("day")
        if k:
            per_day[k] = s.get("daily") or 0
    return total, per_day


now  = datetime.now(JST)
days = [now - timedelta(days=i) for i in range(6, -1, -1)]

# 1回のリクエストで週の合計と日別を同時に取得
week_total, per_day = stats_total(days[0], now)

week = [{"date":  day(d),
         "label": f"{d.month}/{d.day}",
         "count": per_day.get(day(d), 0)}
        for d in days]

month_total, _ = stats_total(now.replace(day=1), now)
year_total,  _ = stats_total(now.replace(month=1, day=1), now)
all_total,   _ = stats_total(datetime(2020, 1, 1, tzinfo=JST), now)

data = {
    "today":   per_day.get(day(now), 0),
    "week":    week,
    "month":   month_total,
    "year":    year_total,
    "total":   all_total,
    "updated": now.isoformat(timespec="seconds"),
}

with open("stats.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=1)

print(json.dumps(data, ensure_ascii=False, indent=1))
