import resizeScreen from "./resize";


class Footer {
  init(){
    const cols = document.querySelectorAll('.footer-info__column');
    const rows = document.querySelectorAll('.footer-info__row');
    cols.forEach((col, idx) => {
      col.id = `footer_col_${idx}`
      resizeScreen([
        {
          element: `#footer_col_${idx}`,
          className: 'mobile',
          size: 1023,
          isLess: true
        },
        {
          element: `#footer_col_${idx} .footer-info__icon`,
          className: 'mobile',
          size: 1023,
          isLess: true
        },
      ])
    })
    rows.forEach((r, idx) => {
      r.id = `footer_row_${idx}`
      resizeScreen([
        {
          element: `#footer_row_${idx}`,
          className: 'mobile',
          size: 1023,
          isLess: true
        },
        {
          element: `#footer_row_${idx} .footer-info__title`,
          className: 'mobile',
          size: 1023,
          isLess: true
        },
        {
          element: `#footer_row_${idx} .footer-info__text`,
          className: 'mobile',
          size: 1023,
          isLess: true
        },
      ])
    })

    resizeScreen([
      {
        element: '.footer',
        className: 'mobile',
        size: 1023,
        isLess: true
      },
      {
        element: '.footer__content',
        className: 'mobile',
        size: 1023,
        isLess: true
      },
      {
        element: '.footer__list-menu',
        className: 'mobile',
        size: 1023,
        isLess: true
      },
      {
        element: '.footer-phones',
        className: 'mobile',
        size: 1023,
        isLess: true
      },
      {
        element: '.footer-socials',
        className: 'mobile',
        size: 1023,
        isLess: true
      },
      {
        element: '.footer__row',
        className: 'mobile',
        size: 1023,
        isLess: true
      },
      {
        element: '.footer-info--name',
        className: 'mobile',
        size: 1023,
        isLess: true
      },
      {
        element: '.footer-menu-first',
        className: 'mobile',
        size: 1023,
        isLess: true
      },
      {
        element: '.footer-menu-second',
        className: 'mobile',
        size: 1023,
        isLess: true
      },
      {
        element: '.footer-menu-third',
        className: 'mobile',
        size: 1023,
        isLess: true
      },
      {
        element: '.footer-info footer-info--name',
        className: 'mobile',
        size: 1023,
        isLess: true
      },
      {
        element: '.footer-info--presentation',
        className: 'mobile',
        size: 1023,
        isLess: true
      },
      {
        element: '.footer-info--bookkeeping',
        className: 'mobile',
        size: 1023,
        isLess: true
      },
      {
        element: '.footer-info--address',
        className: 'mobile',
        size: 1023,
        isLess: true
      },
    ])
  }
}

new Footer().init()