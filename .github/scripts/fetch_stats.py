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


def fetch(start, end_inclusive):
    """end_inclusive の日を含む範囲。終端は翌日を渡す"""
    return api("/stats/total", {
        "start": day(start),
        "end":   day(end_inclusive + timedelta(days=1)),
    })


now  = datetime.now(JST)
days = [now - timedelta(days=i) for i in range(6, -1, -1)]

wk = fetch(days[0], now)

# --- デバッグ: 日別の値を確認 ---
print("--- 週の日別データ ---")
for s in wk.get("stats", []):
    print(f'  {s.get("day")}  daily={s.get("daily")}  hourly合計={sum(s.get("hourly") or [])}')
print(f'  total={wk.get("total")}  total_utc={wk.get("total_utc")}')
print("---------------------")

# daily が0のままなら hourly の合計を使う
per_day = {}
for s in wk.get("stats", []):
    k = s.get("day")
    if not k:
        continue
    v = s.get("daily") or 0
    if v == 0:
        v = sum(s.get("hourly") or [])
    per_day[k] = v

week = [{"date":  day(d),
         "label": f"{d.month}/{d.day}",
         "count": per_day.get(day(d), 0)}
        for d in days]


def period_total(start):
    d = fetch(start, now)
    t = d.get("total_utc") or d.get("total") or 0
    if t == 0:
        t = sum(sum(s.get("hourly") or []) for s in d.get("stats", []))
    return t


data = {
    "today":   per_day.get(day(now), 0),
    "week":    week,
    "month":   period_total(now.replace(day=1)),
    "year":    period_total(now.replace(month=1, day=1)),
    "total":   period_total(datetime(2020, 1, 1, tzinfo=JST)),
    "updated": now.isoformat(timespec="seconds"),
}

with open("stats.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=1)

print(json.dumps(data, ensure_ascii=False, indent=1))
