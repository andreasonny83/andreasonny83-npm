// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

module.exports.emailTemplate = (from, sender, date, body, footer) => `
  <html><head><title>
    Sample email document
  </title></head>
  <body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
    <center>
      <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
        <tr><td align="center" valign="top" style="padding-bottom:40px;">
          <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateContainer">
            <tr><td align="center" valign="top" style="padding-bottom:20px;">
              <table border="0" cellpadding="0" cellspacing="0" width="600" id="templatePreheader"></table>
            </td></tr>
            <tr><td align="center" valign="top">
              <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateHeader">
                <tr><td align="center" valign="top" style="padding-top:20px; padding-bottom:20px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr><td class="headerContent" mc:edit="header_content">
                      <h1>Hi,<br />
                        <span style="font-size:30px">${sender} has just left you a message:</span>
                      </h1>
                      <br />
                      Date: ${date}<br/>
                      From: ${from}<br/>
                    </td></tr>
                  </table>
                </td></tr>
              </table>
            </td></tr>
            <tr><td align="center" valign="top">
              <table border="0" cellpadding="40" cellspacing="0" width="600" id="templateBody">
                <tr><td align="center" valign="top" style="padding-top:20px; padding-bottom:20px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr><td valign="top" class="upperBodyContent" mc:edit="body_content01">
                      ${body}
                    </td></tr>
                  </table>
                </td></tr>
              </table>
            </td></tr>
            <tr><td align="center" valign="top">
              <table border="0" cellpadding="20" cellspacing="0" width="600" id="templateFooter">
                <tr><td align="center" valign="top" style="padding-right:40px; padding-left:40px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr><td valign="top" class="footerContent" style="border-top:1px solid #BBBBBB; padding-top:20px;" mc:edit="footer_social"></td></tr>
                    <tr><td valign="top" class="footerContent" style="padding-top:20px;" mc:edit="footer_utility">
                      ${footer}
                    </td></tr>
                  </table>
                </td></tr>
              </table>
            </td></tr>
          </table>
        </td></tr>
      </table>
    </center>
  </body>
</html>`;
