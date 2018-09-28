// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

'use strict';

class EmailGenerator {
  constructor(emailTemplate, charset = 'UTF-8') {
    this._charset = charset;
    this.emailTemplate = emailTemplate;
  }

  generate(...params) {
    const newParams = [this._charset, ...params];

    return this._generate(...newParams);
  }

  _generateBody(isHtml, sender, from, body) {
    const date = new Date().toUTCString();
    const footer = `
    This is an automatic e-mail.
    If you do not wish to continue receiving these messages or for other queries, plase contact your web administrator.`;

    const message = isHtml
      ? this.emailTemplate(from, sender, date, body, footer)
      : `
      From: ${from} <${sender}> <br/>
      Date: ${date} <br/>
      Message: ${body} <br/>
      Footer: ${footer} <br/>
      `;

    return message;
  }

  _generate(charset, subject, body, from, to, sender, email) {
    const Charset = charset;
    const messageHtml = this._generateBody(true, sender, email, body);
    const messageText = this._generateBody(false, sender, email, body);

    return {
      Destination: {
        ToAddresses: [to],
      },
      Source: from,
      Message: {
        Subject: {
          Data: subject,
          Charset,
        },
        Body: {
          Html: {
            Data: messageHtml,
            Charset,
          },
          Text: {
            Data: messageText,
            Charset,
          },
        },
      },
    };
  }
}

module.exports.EmailGenerator = EmailGenerator;
