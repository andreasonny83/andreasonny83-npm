// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const sendMail = require('../src/index');
const { EmailSenderError } = require('../src/error-handler');
const { MailSender } = require('../src/mail-sender');
const { Log } = require('../src/log');

jest.mock('../src/mail-sender');
jest.mock('../src/log');

describe('sendMail', () => {
  const emailTemplateMock = (from, sender, date, body, footer) =>
    `
    Hello Jest,
    On ${date}, ${from} <${sender}> left you the following message:
    ${body}
    ${footer}`;

  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    MailSender.mockClear();
  });

  it(`should receive a 'data' object`, async () => {
    // Arrange
    const sender = 'sender';
    const email = 'valid@email.com';
    const body = 'body';

    const data = { sender, email, body };

    // Act
    await sendMail(
      emailTemplateMock,
      data,
      'from@email.com',
      'to',
      'subject',
      false
    );

    // Assert
    expect(MailSender).toHaveBeenCalled();
    expect(Log).toHaveBeenCalled();
  });

  it(`should throw an 'Invalid data' error if any of the required filed is missing`, async () => {
    // Arrange
    const sender = 'sender';
    const email = 'email';
    const body = 'body';

    const data1 = {};
    const data2 = { sender };
    const data3 = { sender, email };
    const data4 = { sender, email, body };

    let errors = [];

    // Act
    try {
      await sendMail(emailTemplateMock, data1);
    } catch (err) {
      errors.push(err);
    }
    try {
      await sendMail(emailTemplateMock, data2);
    } catch (err) {
      errors.push(err);
    }
    try {
      await sendMail(emailTemplateMock, data3);
    } catch (err) {
      errors.push(err);
    }
    try {
      await sendMail(emailTemplateMock, data4);
    } catch (err) {
      errors.push(err);
    }

    // Assert
    expect(errors.length).toBe(4);
    expect(errors[0]).toEqual(new EmailSenderError('Invalid data'));
    expect(errors[1]).toEqual(new EmailSenderError('Invalid data'));
    expect(errors[2]).toEqual(new EmailSenderError('Invalid data'));
    expect(errors[3]).toEqual(new EmailSenderError('Invalid data'));
    expect(errors[4]).not.toEqual(new EmailSenderError('Invalid data'));
  });

  it(`should send an email`, async () => {
    // Arrange
    const fakeSend = jest.fn(() => {
      Promise.resolve('ok');
    });

    MailSender.mockImplementation(() => ({
      send: fakeSend,
    }));

    const sender = 'sender';
    const email = 'valid@email.com';
    const body = 'body';

    const data = { sender, email, body };

    // Act
    try {
      await sendMail(
        emailTemplateMock,
        data,
        'from@email.com',
        'to',
        'subject',
        false
      );
    } catch (err) {
      console.log('error', err);
    }

    // Assert
    expect(fakeSend).toHaveBeenCalledWith({
      ...data,
      from: 'from@email.com',
      to: 'to',
      subject: 'subject',
    });
  });

  it(`should return an error`, async () => {
    // Arrange
    const fakeSend = jest.fn(() => {
      return Promise.reject('email delivery failed');
    });

    MailSender.mockImplementation(() => ({
      send: fakeSend,
    }));

    const data = {
      sender: 'sender',
      email: 'valid@email.com',
      body: 'body',
    };

    // Act
    try {
      await sendMail(
        emailTemplateMock,
        data,
        'from@email.com',
        'to',
        'subject',
        false
      );

      // Make sure we never reach the following line
      expect(false).toBeTruthy();
    } catch (err) {
      // Assert
      expect(err).toEqual(new EmailSenderError('email delivery failed'));
    }
  });
});
