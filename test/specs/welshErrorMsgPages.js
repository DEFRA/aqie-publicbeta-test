import passwordPageLogin from './passwordPageLogin'
import startNowPage from 'page-objects/startnowpage'
import locationSearchPage from 'page-objects/locationsearchpage'
import errorPageLocationSearch from '../page-objects/errorPageLocationSearch.js'
import { browser, expect } from '@wdio/globals'

describe('Error-Message-Pages', () => {
  it('Errors - Location Search', async () => {
    await passwordPageLogin.passwordPageLogin()
    if (await startNowPage.toWelshTranslationLink.isClickable()) {
      await startNowPage.toWelshTranslationLink.click()
      const StartPageHeaderText = 'Gwirio ansawdd aer lleol'
      const getStartPageHeaderText =
        await startNowPage.welshStartNowPageHeaderText.getText()
      await expect(getStartPageHeaderText).toMatch(StartPageHeaderText)
      if (await startNowPage.toEnglishTranslationLink.isClickable()) {
        await startNowPage.toEnglishTranslationLink.click()
        const StartPageHeaderText = 'Check local air quality'
        const getStartPageHeaderText =
          await startNowPage.startNowPageHeaderText.getText()
        await expect(getStartPageHeaderText).toMatch(StartPageHeaderText)
      }
    }
    await startNowPage.toWelshTranslationLink.click()
    await startNowPage.startNowBtnClick()

    const LocationHeaderTextWel = 'Ble hoffech chi wirio?'
    const errorSubTextValidationWel = 'Dewiswch lle rydych chi am wirio'
    const errorESWSubTextValidationWel = 'Rhowch leoliad neu god post'
    const errorNISubTextValidationWel = 'Rhowch god post'
    const errorColorHexValueWel = '#d4351c' // red

    const getSubmitTextWelsh = await locationSearchPage.continueBtn.getText()
    await expect(getSubmitTextWelsh).toMatch('Parhau')
    await locationSearchPage.clickContinueBtn()

    const getLocationSearchHeaderText =
      await locationSearchPage.getLocationSearchHeader.getText()
    await expect(getLocationSearchHeaderText).toMatch(LocationHeaderTextWel)
    await locationSearchPage.clickContinueBtn()
    const getErrorMessageNoChoice =
      await locationSearchPage.errorMessageNoChoice.getText()
    await expect(getErrorMessageNoChoice).toMatch(errorSubTextValidationWel)
    const colorErrorText =
      await locationSearchPage.colorLocationSearchBoxText.getCSSProperty(
        'color'
      )
    await expect(colorErrorText.parsed.hex).toMatch(errorColorHexValueWel)

    await locationSearchPage.clickESWRadiobtn()
    await locationSearchPage.clickContinueBtn()
    const getESWLocationSearchBoxText =
      await locationSearchPage.emptyBoxValidationESW.getText()
    await expect(getESWLocationSearchBoxText).toMatch(
      errorESWSubTextValidationWel
    )

    await locationSearchPage.clickNIRadiobtn()
    await locationSearchPage.clickContinueBtn()
    const getNILocationSearchBoxText =
      await locationSearchPage.emptyBoxValidationNI.getText()
    await expect(getNILocationSearchBoxText).toMatch(
      errorNISubTextValidationWel
    )
    await browser.deleteCookies(['airaqie_cookie'])
  })

  it('Errors - Page Route', async () => {
    await passwordPageLogin.passwordPageLogin()
    if (await startNowPage.toWelshTranslationLink.isClickable()) {
      await startNowPage.toWelshTranslationLink.click()
      const StartPageHeaderText = 'Gwirio ansawdd aer lleol'
      const getStartPageHeaderText =
        await startNowPage.welshStartNowPageHeaderText.getText()
      await expect(getStartPageHeaderText).toMatch(StartPageHeaderText)
    }
    // invalid path added hyphen 1
    await browser.url('/check-lleol-ansawdd-aer-1/cy')
    // await browser.pause(2000)
    const getErrorPageHeaderText =
      await errorPageLocationSearch.errorHeaderDisplay.getText()
    await expect(getErrorPageHeaderText).toMatch(
      'Ni allem ddod o hyd i’r dudalen hon'
    )
    await errorPageLocationSearch.clickBackToHomePage()
    // Here as disccused with BA and dev welsh translation will move to English due to invalid page route
    const StartPageHeaderText = 'Check local air quality'
    const getStartPageHeaderText =
      await startNowPage.welshStartNowPageHeaderText.getText()
    await expect(getStartPageHeaderText).toMatch(StartPageHeaderText)
    await browser.deleteCookies(['airaqie_cookie'])
  })
})
