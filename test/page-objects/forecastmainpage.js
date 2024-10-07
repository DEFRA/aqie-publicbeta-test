class ForecastMainPage {
  // change location link
  get changeLocationLink() {
    return $("a[class='govuk-back-link']")
  }

  get regionHeaderDisplay() {
    return $("h1[class='govuk-heading-xl']")
  }

  get subHeadersinForecastPage() {
    return $$("h2[class='govuk-heading-m']")
  }

  async pollutantsHeaderLinksArrCheck() {
    const arr = await $$("h2[class='govuk-heading-m']")
    const arrcheck = Array.isArray(arr)
    return arrcheck
  }

  // public Beta - 4 days forecast
  get getNext4DaysForecastHeader() {
    return $("caption[class*='govuk-!-margin-bottom-4']")
  }

  // Public Beta - 4 days values
  get getNext4DaysForecastValues() {
    return $$("td[class*='daqi-tag-']")
  }

  // Public Beta - 4 days week days text
  get getNext4DaysForecastWeekDaysText() {
    return $$("th[class='govuk-table__header aq-forecast-table__cell']")
  }

  // Public Beta
  get dayPlusOneName() {
    return this.getNext4DaysForecastWeekDaysText[0]
  }

  // Public Beta
  get dayPlusOneValue() {
    return this.getNext4DaysForecastValues[0]
  }

  // Public Beta
  get dayPlusTwoName() {
    return this.getNext4DaysForecastWeekDaysText[1]
  }

  // Public Beta
  get dayPlusTwoValue() {
    return this.getNext4DaysForecastValues[1]
  }

  // Public Beta
  get dayPlusThreeName() {
    return this.getNext4DaysForecastWeekDaysText[2]
  }

  // Public Beta
  get dayPlusThreeValue() {
    return this.getNext4DaysForecastValues[2]
  }

  // Public Beta
  get dayPlusFourName() {
    return this.getNext4DaysForecastWeekDaysText[3]
  }

  // Public Beta
  get dayPlusFourValue() {
    return this.getNext4DaysForecastValues[3]
  }

  // Public Beta - UK Forecast
  get pollutantsUKSummaryLinks() {
    return $("h2[class='govuk-heading-m  govuk-!-margin-bottom-6']")
  }

  // DAQI forecast
  // public beta

  async daqiForecastValue() {
    const count = await $$("div[class*='daqi-selected']").length
    return count.toString()
  }

  get daqiForecastCaption() {
    return $("h2[class='govuk-heading-m govuk-!-margin-bottom-6']")
  }

  // All para in forecastpage
  get forecastMainPagePara() {
    return $$('p')
  }

  // Health advice para first line
  get daqiForecastPara() {
    return this.forecastMainPagePara[5]
  }

  // accordian link
  get daqiAccordian() {
    return $("summary[class='govuk-details__summary']")
  }

  get daqiAccordianHeader() {
    return $$("th[class='govuk-table__header']")
  }

  get daqiAccordianHeaderIndex() {
    return this.daqiAccordianHeader[1]
  }

  // pollutant summary

  get pollutantSummary() {
    return $("p[class='govuk-!-margin-bottom-6']")
  }

  // Public Beta
  get pollutantSummaryTabs() {
    return $$("a[class='govuk-tabs__tab']")
  }

  // Public Beta
  get todayPollutantSummaryTab() {
    return this.pollutantSummaryTabs[0]
  }

  // Public Beta
  get todayPollutantSummaryTabTitle() {
    return $("a[id='tab_today']")
  }

  // Public Beta
  get tomorrowPollutantSummaryTabTitle() {
    return $("a[id='tab_tomorrow']")
  }

  // Public Beta
  get outlookPollutantSummaryTabTitle() {
    return $("a[id='tab_outlook']")
  }

  // Public Beta
  get todayPollutantSummaryTabs() {
    return $("div[id='today'] p")
  }

  // Public Beta
  get tomorrowPollutantSummaryTabs() {
    return $("div[id='tomorrow'] p")
  }

  // Public Beta
  get outlookPollutantSummaryTabs() {
    return $("div[id='outlook'] p")
  }

  // Public Beta
  get tomorrowPollutantSummaryTab() {
    return this.pollutantSummaryTabs[1]
  }

  // Public Beta
  get outlookPollutantSummaryTab() {
    return this.pollutantSummaryTabs[2]
  }

  // Station Name
  get pollutantStationNamesArr() {
    return $$(
      "div[class='defra-toggletip defra-toggletip--open defra-toggletip--up']"
    )
  }

  // ToolTip
  get toolTipMessageArr() {
    return $$("span[class='defra-toggletip__text']")
  }

  // ToolTip Button
  get toolTipButtonArr() {
    return $$(
      "button[class='tooltip defra-toggletip__button defra-toggletip-target']"
    )
  }

  get toolTipButton1() {
    return this.toolTipButtonArr[0]
  }

  get toolTipButton2() {
    return this.toolTipButtonArr[1]
  }

  get toolTipButton3() {
    return this.toolTipButtonArr[2]
  }

  get toolTipMessage1() {
    return this.toolTipMessageArr[0]
  }

  get toolTipMessage2() {
    return this.toolTipMessageArr[1]
  }

  get toolTipMessage3() {
    return this.toolTipMessageArr[2]
  }

  get pollutantStationName() {
    return this.pollutantStationNamesArr[0]
  }

  // Pollutant link

  get pollutantFetchTable1() {
    return $('//*[@id="1"]/tbody/tr[1]/td[2]')
  }

  get pollutantsHeaderLinks() {
    return this.subHeadersinForecastPage[0]
  }

  get pollutantsNameTableLinks() {
    return this.subHeadersinForecastPage[1]
  }

  get timestampBlockForecastPage() {
    return $("p[class='govuk-caption-s govuk-!-margin-bottom-4']")
  }

  get pollutantsLink() {
    return $$("li a[class='govuk-link']")
  }

  get pollutantsLinkOzone() {
    return this.pollutantsLink[1]
  }

  get pollutantsLinkNO2() {
    return this.pollutantsLink[2]
  }

  get pollutantsLinkSO2() {
    return this.pollutantsLink[3]
  }

  get pollutantsLinkPM25() {
    return this.pollutantsLink[4]
  }

  get pollutantsLinkPM10() {
    return this.pollutantsLink[5]
  }

  get subHeaderPollutantLinks() {
    return $$("h2[class='govuk-heading-s']")
  }

  // pollutant tables
  get pollutantNameCollections() {
    return $$("a[class='govuk-!-margin-bottom-1']")
  }

  get pollutantNameHeader() {
    return $$(
      "th[class='defra-aq-levels-table__cell defra-aq-levels-table__cell--pollutant']"
    )
  }

  get pollutantValueCollections() {
    return $$(
      "td[class='defra-aq-levels-table__cell defra-aq-levels-table__cell--reading']"
    )
  }

  get pollutantLevelCollections() {
    return $$(
      "td[class='defra-aq-levels-table__cell defra-aq-levels-table__cell--level']"
    )
  }

  get timestampPollutantTable() {
    return $$("p[class='govuk-caption-s govuk-!-margin-bottom-6']")
  }

  get timestandPollutantTable1() {
    return this.timestampPollutantTable[0]
  }

  get pollutantNameHeader1() {
    return this.pollutantNameHeader[0]
  }

  get particulateMatterSubHeaders() {
    return this.subHeaderPollutantLinks[1]
  }
  /* get pollutantNearestRegions() {
    return $$(
      "h3 div[class='defra-toggletip defra-toggletip--open defra-toggletip--up']"
    )
  }

  get pollutantStationName1() {
    return this.pollutantNearestRegions[0]
  } */

  async pollutantsFirstTableCollections() {
    const arr = []
    for (let i = 1; i <= 5; i++) {
      for (let j = 1; j <= 3; j++) {
        const values = $('//*[@id="1"]/tbody/tr[' + i + ']/td[' + j + ']')
        const isExisting = await values.isExisting()
        if (isExisting) {
          if (
            (await values.getText()) !== null ||
            (await values.getText()) !== ''
          ) {
            arr.push(await values.getText())
          }
        }
      }
    }
    return arr
  }
}

export default new ForecastMainPage()
