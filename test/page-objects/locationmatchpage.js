import ForecastMainPage from './forecastmainpage.js'
import { browser, expect } from '@wdio/globals'

class LocationMatchPage {
  get headerTextMatch() {
    return $("h1[class='govuk-heading-l']")
  }

  get paraTextMatch() {
    return $("p[class='govuk-body']")
  }

  get linksOnMatchRegion() {
    return $$("li a[class='govuk-link']")
  }

  get firstLinkOfLocationMatch() {
    return this.linksOnMatchRegion[1]
  }

  async clickSearchBackLink() {
    await $("a[href*='/search-location']").click()
  }

  async clickOnMatchRegionLinks() {
    for (let i = 1; i < (await this.linksOnMatchRegion.length); i++) {
      const matchLink = await this.linksOnMatchRegion[i].getText()
      const link = await $('=' + matchLink + '')
      await link.click()
      const getUserRegion = await ForecastMainPage.regionHeaderDisplay.getText()
      await expect(getUserRegion).toMatch(matchLink)
      await browser.back()
    }
  }
}

export default new LocationMatchPage()
