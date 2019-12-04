### QAT Tasks

* [ ] 啟動遊戲
  * [ ] FakeBU 打 WebAPI 拿 Token - 2 days
  * [ ] ~~WebAPI 產生 URL~~ @done

* [ ] GC登入
  * [ ] GC 連線送出 Token - 0.5 days
  * [ ] NodeGC 驗證 Token - 0.5 days

* [ ] GC 初始資料 (Member Info, Balance, Table Info, Setting)
  * [ ] GC 處理初始資料 - 0.5 days
  * [ ] NodeGC 打 WebAPI - 0.5 days
  * [ ] WebAPI 吐 初始資料
  * [ ] FakeBU 吐 Member Balance - 0.5 days

* [ ] GC 更新 Balance - 0.5 days
  * [ ] 定時更新 ~20s
  * [ ] 下注後更新
  * [ ] Settle 三秒後更新

* [ ] 下注
  * [ ] GC 下注檢查，送出注單 - 2 days
  * [ ] NodeGC 轉打 WebAPI - 0.5 days
  * [ ] WebAPI 檢查注單，收單 (有效注單計算?)
  * [ ] FakeBU 扣款 - 0.5 days

* [ ] 會員修改設定: 籌碼、頻道、關注、好路
  * [ ] GC UI, Service 發送事件 - 1 days
  * [ ] NodeGC 轉打 WebAPI - 0.5 days
  * [ ] WebAPI 儲存設定

* [ ] BetOn 局數限制
  * [ ] OPMC 設定最大局數限制
  * [ ] GC UI 檢查最大局數限制 - 0.5 days
  * [ ] NodeGC 取得局數限制設定 - 0.5 days
  * [ ] WebAPI 吐最大局數限制

* [ ] GC 三層報表:
  * [ ] GC UI: 1 days
  * [ ] NodeGC: 0.5 days
  * [ ] WebAPI

* [ ] 多語系:
  * [ ] GC:
    * [ ] 中文 - 0.5 days
    * [ ] 英文 - 0.5 days
    * [ ] 越南文 - 0.5 days
    * [ ] 泰文 - 0.5 days
    * [ ] 印尼文 - 0.5 days
  * [ ] 後台: 英文 簡中

* [ ] 多貨幣: 人民幣、美金、越南盾、泰銖、印尼盾
  * [ ] 限額 (多幣別設定)
  * [ ] 籌碼 (先全給一樣的籌碼清單，GC 自動濾掉不合理的籌碼)
  * [ ] 報表 BUCurrency,OPCurrency,memberCurrency
  * [ ] 匯率設置: TBD