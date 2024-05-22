const nodemailer = require("nodemailer");
class HomeController {
  async Index(req, res) {
    res.render("pages/home", {
      layout: "MainLayout/MasterLayout.ejs",
    });
  }
  async SendMail(req, res) {
    const { email, content, name } = req.body;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "dducthanh04@gmail.com",
        pass: "midn lcia tcly pcbn",
      },
    });

    transporter.sendMail({
      from: `Người nhận tin nhắn:<${email}>`,
      to: "dducthanh04@gmail.com",
      subject: "Contact",
      html: `<div">
      <h3 style:"text-align: center">Tin nhắn từ <strong>${name}</strong> gửi đến bạn: <em>${content}</em></h3>
      </div>`,
    });

    res.send("Email sent successfully");
  }
}
module.exports = new HomeController();
