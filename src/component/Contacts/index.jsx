import React from 'react';
import './index.css';
import Blockquote from 'component/Blockquote';

import emailjs from 'emailjs-com';

import { MdOutlineEmail } from 'react-icons/md';
import { TbBrandTelegram, TbBrandWhatsapp } from 'react-icons/tb';

// service_id, template_id, public_key
// 'service_xqcx7wc', 'template_voscmoh', form, 'unbm_cLCy2_ZyxaiM'
import cfg from './config.js';
// const cfg = {
//   service_id: 'service_xqcx7wc', 
//   template_id: 'template_voscmoh',
//   public_key: 'unbm_cLCy2_ZyxaiM',
// }

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        email: "",
        message: "",
      },
      isSent: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { form, isSent } = this.state;
    return (
      <section id="contacts">
        <h5>Get In Touch</h5>
        <h2>Contacts</h2>

        <div className="container container__contacts">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon"/>
              <h4>Email</h4>
              <h5>lazarev.n.f@outlook.com</h5>
              <a href="mailto:lazarev.n.f@outlook.com" target="_blank">Send Message</a>
            </article>
            <article className="contact__option">
              <TbBrandTelegram className="contact__option-icon"/>
              <h4>Telegram</h4>
              <h5>@colobrod</h5>
              <a href="https://t.me/colobrod" target="_blank">Send Message</a>
            </article>
            <article className="contact__option">
              <TbBrandWhatsapp className="contact__option-icon"/>
              <h4>WhatsApp</h4>
              {/*<h5>lazarev.n.f@outlook.com</h5>*/}
              <a href="https://api.whatsapp.com/send?phone=+79201922392" target="_blank">Send Message</a>
            </article>
          </div>
          <form id="contacts-form" onSubmit={this.handleSubmit} action="">
            <input 
              type="text" 
              name="name" 
              value={form.name}
              onChange={this.handleChange}
              placeholder="placeholder"
              required 
            />
            <input 
              type="email" 
              name="email" 
              value={form.email}
              onChange={this.handleChange}
              placeholder="placeholder"
              required 
            />
            <textarea 
              name="message" 
              value={form.message}
              onChange={this.handleChange}
              placeholder="placeholder"
              rows="7" 
              required
            ></textarea>
            {/*<button type="submit" onSubmit={(e) => this.handleSubmit(e)} className="btn btn-primary">Send Message</button>*/}
            {/*<div className="notification notification-success">Ваше сообщение успешно отправлено. Я свяжусь с вами в ближайшее время.</div>*/}
            <button className="btn btn-primary">Send Message</button>
            { isSent && this.notify(isSent) }
          </form>
        </div>
      </section>
    );
  }

  handleChange(event) {
    const { name, value } = event.target;
    const form = Object.assign({}, this.state.form);
    form[name] = value;
    this.setState({ form });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const form = Object.assign({}, this.state.form);
    let { isSent } = this.state;
    await emailjs.send(cfg.service_id, cfg.template_id, form, cfg.public_key)
      .then(
        result => {
          isSent = 'success';
          console.log(result.text);
        }, 
        error => {
          isSent = 'error';
          console.log(error.text);
        }
      );
    for (const [key, value] of Object.entries(form)) form[key] = '';
    this.setState({ form, isSent });
    console.log(this.state);
  }

  notify(result) {
    switch (result) {
      case 'success':
        return <Blockquote type='success'>Ваше сообщение успешно отправлено</Blockquote>;
        break;
      case 'warning':
        return <Blockquote type='warning'>Какое-то предупреждение</Blockquote>;
        break;
      case 'error':
        return <Blockquote type='error'>Упс, что-то пошло не так</Blockquote>;
        break;
    }
  }
}

export default Contacts;
