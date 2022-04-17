const {
  colors,
  borderWidth,
  maxWidth,
  fontSize,
  minWidth,
  height,
  boxShadow,
  lineHeight
} = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    extend: {
      lineHeight: {
        ...lineHeight,
        'extra-tight': '1.15'
      },
      inset: {
        '-6': '-24px',
        '-5': '-20px',
        '-4': '-16px',
        '1/2': '0.25rem',
        '3/8': '0.375rem',
        2: '0.5rem',
        4: '16px',
        6: '24px',
        5: '20px',
        '10': '40px'
      },
      listStyleType: {
        square: 'square'
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%'
      },
      width: {
        'min-content': 'min-content',
        '180': '180px',
        fit: 'fit-content',
        '300': '300px',
        '11/24': '45.8333333%',
        '2/10': '30%',
        '2/9': '22.2222222%',
        '90': '90%'
      },
      fontSize: {
        ...fontSize,
        '15': '15px',
        '17': '17px',
        '21': '21px',
        '25': '25px',
        '32': '32px'
      },
      textColor: {
        primary: '#333'
      },
      colors: {
        gray: {
          ...colors.gray,
          '40': '#F2F5F8',
          '50': '#f4f4f4',
          '60': '#F1F3F6',
          '70': '#f6f9fc',
          '100': '#EDF0F4',
          '150': '#eeeeee',
          '200': '#EFEFEF',
          '250': '#e2e2e2',
          '300': '#e5e5e5',
          '500': '#6F777B',
          '600': '#919191',
          '800': '#4d4d4d',
          '900': '#222222',
          '950': '#0e1a26'
        },
        yellow: {
          '500': '#FFBF47'
        },
        fucsia: {
          '500': '#D20042'
        },
        indigo: {
          '500': '#474D98'
        },
        purple: {
          ...colors.purple,
          '150': '#E6E6FF',
          '500': '#5d2ee5'
        },
        green: {
          ...colors.green,
          '400': '#1b9d6b',
          '500': '#076725'
        },
        cyan: {
          ...colors.cyan,
          '500': '#acf2ff'
        },
        blue: {
          ...colors.blue,
          '200': '#DEE3EA',
          '500': '#2B6CB0',
          '700': '#0056ac'
        },
        indigo: { ...colors.ingido, '500': '#474d98' },
        red: {
          ...colors.red,
          '400': '#fd583a',
          '500': '#ff0707',
          '600': '#eb0303',
          '650': '#d20000',
          '700': '#CF000B',
          '800': '#B21414'
        }
      },
      borderWidth: {
        ...borderWidth,
        '3': '3px',
        '5': '5px'
      },
      minWidth: {
        ...minWidth,
        '6': '6rem',
        '10': '10rem',
        '12': '12rem',
        '15': '15rem',
        '16': '16rem',
        '180': '180px',
        '29px': '29px',
        '600': '600px'
      },
      maxWidth: {
        ...maxWidth,
        '3': '3rem',
        '4': '4rem',
        '6': '6rem',
        '8': '8rem',
        '10': '10rem',
        '12': '12rem',
        '13': '13rem',
        '16': '16rem',
        '18': '18rem',
        '20': '20rem',
        '24': '24rem',
        '32': '32rem',
        '40': '40rem',
        '48': '48rem',
        '70': '70rem',
        '29px': '29px',
        '380': '380px',
        '1/4': '25%',
        '1/3': '33%',
        '1/2': '50%',
        '2/3': '66%',
        '3/4': '75%'
      },
      height: {
        ...height,
        '140': '140px',
        '180': '180px',
        '315': '315px',
        '210': '210px',
        '240': '240px',
        '270': '270px',
        '62': '62px',
        '91': '91px',
        '17': '17rem',
        '28': '28rem',
        '33': '33rem',
        '35': '35rem'
      },
      minHeight: {
        '0': '0px',
        '2': '2rem',
        '2.5': '2.5rem',
        '3': '3rem',
        '4': '4rem',
        '6': '6rem',
        '10': '10rem',
        '12': '12rem',
        '16': '16rem',
        '18': '18rem',
        '19': '19rem',
        '20': '20rem',
        '27': '27rem',
        '35': '35rem',
        '125': '125px',
        '96': '96px',
        '128': '128px',
        '72': '72px',
        '121': '121px',
        '19': '19rem',
        '20': '20rem',
        '27': '27rem',
        '35': '35rem'
      },
      boxShadow: {
        ...boxShadow,
        '3xl': '0 3px 6px #d3dfeb;',
        'feed-img': '1px 1px 2px 0px rgba(0, 0, 0, 0.25)',
        'page-card': '2px -3px 17px rgba(72, 98, 124, 0.26)',
        button: '0 3px 6px rgba(0, 0, 0, 0.16)'
      }
    }
  },
  variants: {
    opacity: ['hover']
  },
  plugins: []
}
