import { IEmail } from '@/app/api/email/route';

export const htmlData = ({name, message, email}:IEmail) => {
  const date = new Date();
  let year:number = date.getFullYear();
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title></title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <style type="text/css">
        body,
        table,
        td,
        a {
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        table {
          border-collapse: collapse !important;
        }
        body {
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
        }
        @media screen and (max-width: 525px) {
          .wrapper {
            width: 100% !important;
            max-width: 100% !important;
          }
          .responsive-table {
            width: 100% !important;
          }
          .padding {
            padding: 10px 5% 15px 5% !important;
          }
          .section-padding {
            padding: 0 15px 50px 15px !important;
          }
        }
        .secondary{
            color: #00AEEF;
        }
        .form-container {
          margin-bottom: 24px;
          padding: 20px;
          border: 1px dashed #ccc;
        }
        .form-heading {
          color: #002239;
          font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
          font-weight: 400;
          text-align: left;
          line-height: 20px;
          font-size: 18px;
          margin: 0 0 8px;
          padding: 0;
        }
        .form-answer {
          color: #2a2a2a;
          font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
          font-weight: 300;
          text-align: left;
          line-height: 20px;
          font-size: 16px;
          margin: 0 0 24px;
          padding: 0;
        }
        div[style*="margin: 16px 0;"] {
          margin: 0 !important;
        }
      </style>
    </head>
    <body style="margin: 0 !important; padding: 0 !important; background: #fff">
      <div
        style="
          display: none;
          font-size: 1px;
          color: #fefefe;
          line-height: 1px;
          max-height: 0px;
          max-width: 0px;
          opacity: 0;
          overflow: hidden;
        "
      ></div>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td
            bgcolor="#ffffff"
            align="center"
            style="padding: 10px 15px 30px 15px"
            class="section-padding"
          >
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 500px"
              class="responsive-table"
            >
              <tr>
                <td>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr><img src="/assets/logo.png" width="50px" height="50px"/></tr>
                    <tr>
                      <td>
                        <table
                          width="100%"
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                        >
                          <tr>
                            <td
                              style="
                                padding: 0 0 0 0;
                                font-size: 16px;
                                line-height: 25px;
                                color: #002239;
                              "
                              class="padding message-content"
                            >
                              <h2>Hello <span class="secondary">ITX Telecoms</span>, you have a new message</h2>
                              <h3>From <br/> <span class="secondary">${name}</span> <br/> <span class="secondary">${email}</span></h3>
                              <div class="form-container">${message}</div>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                </td>
                <td style="
                      padding: 0 0 0 0;
                      font-size: 12px;
                      line-height: 25px;
                      color: #232323;
                ">
                &copy; ITX telecoms ${year}. All rights reserved.
                </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `
}