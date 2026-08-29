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


def total(start_date, end_date):
    """start_date から end_date まで（両端を含む）の訪問者数"""
    d = api("/stats/total", {
        "start": day(start_date),
        "end":   day(end_date + timedelta(days=1)),   # 終端は翌日を渡す
    })
    return d.get("total_utc") or d.get("total") or 0


now  = datetime.now(JST)
days = [now - timedelta(days=i) for i in range(6, -1, -1)]

week = [{"date":  day(d),
         "label": f"{d.month}/{d.day}",
         "count": total(d, d)}
        for d in days]

data = {
    "today":   total(now, now),
    "month":   total(now.replace(day=1), now),
    "year":    total(now.replace(month=1, day=1), now),
    "total":   total(datetime(2020, 1, 1, tzinfo=JST), now),
    "week":    week,
    "updated": now.isoformat(timespec="seconds"),
}

with open("stats.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=1)

print(json.dumps(data, ensure_ascii=False, indent=1))
