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


def total(start, end):
    """期間内の訪問者数を返す"""
    d = api("/stats/total", {"start": start, "end": end})
    return d.get("total_utc") or d.get("total") or 0


def day_str(d):
    return d.strftime("%Y-%m-%d")


now        = datetime.now(JST)
today      = day_str(now)
month_1st  = day_str(now.replace(day=1))
year_1st   = day_str(now.replace(month=1, day=1))
long_ago   = "2020-01-01"

# 直近7日間
days = [now - timedelta(days=i) for i in range(6, -1, -1)]
week = [{"date": day_str(d),
         "label": f"{d.month}/{d.day}",
         "count": total(day_str(d), day_str(d))}
        for d in days]

data = {
    "today":   total(today,     today),
    "month":   total(month_1st, today),
    "year":    total(year_1st,  today),
    "total":   total(long_ago,  today),
    "week":    week,
    "updated": now.isoformat(timespec="seconds"),
}

with open("stats.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=1)

print(json.dumps(data, ensure_ascii=False, indent=1))
