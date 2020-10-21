import create from '../../_styles/utils/create-component-base'
import commonVariables from './_common'

export default create({
  theme: 'light',
  name: 'Steps',
  getDerivedVariables ({ base, derived }) {
    return {
      ...commonVariables,
      stepHeaderFontWeight: base.fontWeightStrong,
      indicatorTextColorProcess: 'black',
      indicatorTextColorWait: derived.textColorDisabled,
      indicatorTextColorFinish: derived.primaryColor,
      indicatorTextColorError: derived.errorColor,
      indicatorBorderColorProcess: derived.primaryColor,
      indicatorBorderColorWait: derived.textColorDisabled,
      indicatorBorderColorFinish: derived.primaryColor,
      indicatorBorderColorError: derived.errorColor,
      indicatorColorProcess: derived.primaryColor,
      indicatorColorWait: 'transparent',
      indicatorColorFinish: 'transparent',
      indicatorColorError: 'transparent',
      splitorColorProcess: derived.textColorDisabled,
      splitorColorWait: derived.textColorDisabled,
      splitorColorFinish: derived.primaryColor,
      splitorColorError: derived.textColorDisabled,
      headerTextColorProcess: derived.textColor1,
      headerTextColorWait: derived.textColorDisabled,
      headerTextColorFinish: derived.textColorDisabled,
      headerTextColorError: derived.errorColor,
      descriptionTextColorProcess: derived.textColor2,
      descriptionTextColorWait: derived.textColorDisabled,
      descriptionTextColorFinish: derived.textColorDisabled,
      descriptionTextColorError: derived.errorColor
    }
  }
})
