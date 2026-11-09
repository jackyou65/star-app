# 星座運勢 App（Android）

本命星盤、今日／本週／本月／今年運勢、時機查詢、星座配對、檔案儲存，以及每日、每月、天象通知提醒。

## 取得 APK 的兩種方式

### 方式一：用 GitHub 自動打包（不用安裝任何軟體）

1. 到 GitHub 建立一個新的 repository（可設為 Private）。
2. 把這個資料夾的全部內容上傳（網頁上按 Add file → Upload files，整個資料夾拖進去，包含 `.github` 資料夾）。
   - 如果網頁上傳看不到 `.github` 資料夾，可以在 repository 裡按 Add file → Create new file，檔名輸入 `.github/workflows/build-apk.yml`，再把本資料夾同名檔案的內容貼上。
3. 上傳後點上方的 **Actions** 分頁，會看到「Build APK」正在執行，約 5–8 分鐘完成。
   - 如果沒有自動執行，點左側「Build APK」→ 右側 **Run workflow**。
4. 完成後點進該次執行，頁面下方 **Artifacts** 有 `star-apk`，下載解壓縮就是 `app-debug.apk`。

### 方式二：用 Android Studio 在自己電腦打包

需要先安裝 Node.js 22 與 Android Studio。

```
npm install
npm run sync
```

接著用 Android Studio 開啟 `android` 資料夾，選單 **Build → Build App Bundle(s) / APK(s) → Build APK(s)**。

## 安裝到手機

1. 把 `app-debug.apk` 傳到手機（LINE 傳給自己、Google Drive、USB 都可以）。
2. 點開安裝，手機會詢問「允許安裝未知來源的應用程式」，允許即可。
3. 第一次在 App 內按「儲存並排定提醒」時，請允許通知權限。

## 提醒功能說明

- 在 App 下方「提醒設定」選擇提醒對象與時間，勾選要提醒的項目。
- 每日提醒：每天通知當日各項目（整體、愛情、事業、財運、健康、人際、考運、出行、簽約、搬家）的星等與建議。
- 每月提醒：每月 1 日通知當月各項目的星等與建議。
- 天象提醒：水星逆行開始／結束、新月、滿月、太陽換座當天通知。
- App 會一次排好未來 60 天的每日提醒、12 個月的每月提醒與 90 天內的天象提醒；每次打開 App 會自動續排。**超過兩個月沒開 App，提醒會停止**，打開一次就會恢復。
- 部分手機（小米、OPPO、vivo、華為等）有省電管理，若通知沒準時出現，請把「星座運勢」設為不限制背景、允許自動啟動。

## 修改內容後重新打包

主程式在 `src/star.html`。修改後執行 `npm run sync`（或直接推上 GitHub 讓 Actions 重新打包）。

## 說明

這是 debug 版 APK，可正常安裝使用，但不能上架 Google Play。若要上架，需要另外建立簽章金鑰並改用 release 版本打包。
