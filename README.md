<h1 style="font-size: 2.5em; margin-bottom: 20px;"># QR Project</h1>

<p style="font-size: 1.1em; line-height: 1.6; margin-bottom: 20px;">Hello, everybody! <br> This is a simple project, but my first full-stack project!</p>

<div style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 20px; margin-bottom: 30px;">
    <img src="frontend/imgs/screenshotFront.png" style="width: 60%; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
    <img src="frontend/imgs/sreenShotMobile.png" style="width: 15%; min-width: 200px; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
</div>

<p style="font-size: 1.1em; line-height: 1.6; margin-bottom: 20px;">I developed the front-end using: HTML, CSS, Bootstrap, and JavaScript. And the back-end was made with Node.js, and the <code>qrcode</code> Library from npm.</p>

<h2 style="font-size: 2em; margin-top: 30px; margin-bottom: 15px;">Why I developed this project?</h2>
<p style="font-size: 1.1em; line-height: 1.6; margin-bottom: 20px;">I wanted to get experience with back-end development, so I developed this project. <br> I want more experience in this area. If you have any suggestions, text me on WhatsApp:<br>+55 (73) 999199697</p>
<p style="font-size: 1.1em; line-height: 1.6; margin-bottom: 20px;">My next step is to learn how I can apply this to web services.</p>

<hr style="margin: 40px 0; border: 0; border-top: 1px solid #eee;">

<h1 style="font-size: 2.5em; margin-bottom: 20px;">Customizable QR Code Generator</h1>

<p style="font-size: 1.1em; line-height: 1.6;">A complete web application to generate QR Codes of different types (WhatsApp, Website, Instagram, Location) with color customization options and image download.</p>

<h2 style="font-size: 2em; margin-top: 30px; margin-bottom: 15px;">🚀 Features</h2>
<ul style="list-style: none; padding-left: 0;">
    <li style="margin-bottom: 10px; font-size: 1.1em;"><b>QR Code Generation by Type:</b>
        <ul style="list-style: disc; padding-left: 25px; margin-top: 5px;">
            <li style="margin-bottom: 5px;">WhatsApp (phone numbers)</li>
            <li style="margin-bottom: 5px;">Link/Text (Website URLs or any text)</li>
            <li style="margin-bottom: 5px;">Instagram (profiles)</li>
            <li style="margin-bottom: 5px;">Location (Map URLs)</li>
        </ul>
    </li>
    <li style="margin-bottom: 10px; font-size: 1.1em;"><b>Color Customization:</b> Change the QR Code color and background color.</li>
    <li style="margin-bottom: 10px; font-size: 1.1em; line-height: 1.6; display: flex; flex-direction: column; align-items: center; margin-top: 15px;">
        <img src='frontend/imgs/screenShotOptions.png' style='width: 70%; max-width: 400px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);'>
    </li>
    <li style="margin-bottom: 10px; font-size: 1.1em;"><b>Image Download:</b> Download the generated QR Code in PNG format.</li>
    <li style="margin-bottom: 10px; font-size: 1.1em;"><b>Intuitive Interface:</b> Responsive and easy-to-use design.</li>
    <li style="margin-bottom: 10px; font-size: 1.1em;"><b>Input Validation:</b> Basic validation of data entered for each QR Code type.</li>
</ul>

<h2 style="font-size: 2em; margin-top: 30px; margin-bottom: 15px;">🛠️ Technologies Used</h2>
<p style="font-size: 1.1em; line-height: 1.6;">The project is divided into <b>Front-end</b> and <b>Back-end</b>.</p>

<h3 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px;">Front-end</h3>
<ul style="list-style: none; padding-left: 20px;">
    <li style="margin-bottom: 5px;"><b>HTML5:</b> Page structure.</li>
    <li style="margin-bottom: 5px;"><b>CSS3:</b> Styling and responsiveness (including smooth transitions for the settings panel).</li>
    <li style="margin-bottom: 5px;"><b>Bootstrap Icons:</b> Used for better efficiency and customization of the application.</li>
    <li style="margin-bottom: 5px;"><b>JavaScript (ES6+):</b> Application logic, DOM manipulation, and Back-end communication.
        <ul style="list-style: disc; padding-left: 25px; margin-top: 5px;">
            <li style="margin-bottom: 5px;">Modularization with <code style="padding: 2px 4px; border-radius: 3px; font-family: monospace;">import</code> / <code style="padding: 2px 4px; border-radius: 3px; font-family: monospace;">export</code>.</li>
        </ul>
    </li>
</ul>

<h3 style="font-size: 1.5em; margin-top: 20px; margin-bottom: 10px;">Back-end</h3>
<ul style="list-style: none; padding-left: 20px;">
    <li style="margin-bottom: 5px;"><b>Node.js:</b> JavaScript runtime environment on the server.</li>
    <li style="margin-bottom: 5px;"><b>Express.js:</b> Web framework to build the REST API.</li>
    <li style="margin-bottom: 5px;"><code style="padding: 2px 4px; border-radius: 3px; font-family: monospace;">qrcode</code><b> library:</b> Library to generate QR Codes.</li>
    <li style="margin-bottom: 5px;"><b>MySQL (or other DB):</b> Database for QR Code registration (if implemented).
        <ul style="list-style: disc; padding-left: 25px; margin-top: 5px;">
            <li style="margin-bottom: 5px;"><code style="padding: 2px 4px; border-radius: 3px; font-family: monospace;">mysql</code> (or <code style="padding: 2px 4px; border-radius: 3px; font-family: monospace;">mysql2</code>) for database connection.</li>
        </ul>
    </li>
</ul>

<br>
<p style="font-size: 1.1em; line-height: 1.6;"><b>Kayck Arcanjo</b> | Instagram: <a href="https://www.instagram.com/thearckay" target="_blank" style="text-decoration: none;">thearckay</a> | WhatsApp: +55 (73) 999199697</p>
