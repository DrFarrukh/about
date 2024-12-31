# Dr. Muhammad Farrukh Qureshi - Personal Website

A modern, responsive personal website showcasing academic achievements, research work, and projects.

## Project Structure
```
personal-website/
├── index.html        # Main HTML file
├── styles.css        # CSS styles
├── script.js         # JavaScript functionality
└── README.md         # Documentation
```

## Features
- Responsive design
- Dynamic content loading
- Research publications showcase
- Project portfolio
- Google Scholar integration
- Contact form

## Hosting on Raspberry Pi 2

### Prerequisites
1. Raspberry Pi 2 with Raspberry Pi OS installed
2. Apache2 web server
3. Basic networking knowledge

### Step-by-Step Installation Guide

1. **Update Raspberry Pi OS**
```bash
sudo apt update
sudo apt upgrade -y
```

2. **Install Apache2**
```bash
sudo apt install apache2 -y
```

3. **Install Git (if not installed)**
```bash
sudo apt install git -y
```

4. **Configure Apache2**
```bash
# Start Apache2
sudo systemctl start apache2
# Enable Apache2 to start on boot
sudo systemctl enable apache2
```

5. **Set up Website Directory**
```bash
# Remove default index.html
sudo rm /var/www/html/index.html
# Copy website files
sudo cp -r /path/to/personal-website/* /var/www/html/
```

6. **Set Permissions**
```bash
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html
```

7. **Configure Port Forwarding (Optional)**
- Access your router's settings
- Forward port 80 to your Raspberry Pi's local IP address
- Consider using HTTPS (port 443) for security

8. **Set up Dynamic DNS (Optional)**
- Register with a Dynamic DNS service
- Install and configure Dynamic DNS client on Raspberry Pi
```bash
sudo apt install ddclient
sudo nano /etc/ddclient.conf
```

### Security Considerations
1. **Update Regularly**
```bash
sudo apt update && sudo apt upgrade -y
```

2. **Install UFW Firewall**
```bash
sudo apt install ufw
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 22/tcp
sudo ufw enable
```

3. **Install SSL Certificate (Recommended)**
```bash
sudo apt install certbot python3-certbot-apache
sudo certbot --apache
```

### Maintenance
1. **Monitor Logs**
```bash
sudo tail -f /var/log/apache2/error.log
sudo tail -f /var/log/apache2/access.log
```

2. **Backup Website**
```bash
sudo cp -r /var/www/html /backup/website-$(date +%Y%m%d)
```

3. **Update Website Content**
```bash
# Navigate to website directory
cd /var/www/html
# Pull latest changes (if using Git)
sudo git pull
```

### Troubleshooting
1. **Check Apache Status**
```bash
sudo systemctl status apache2
```

2. **Check Permissions**
```bash
ls -la /var/www/html
```

3. **Check Apache Error Logs**
```bash
sudo tail -f /var/log/apache2/error.log
```

## Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. For live reload during development, use Python's built-in server:
```bash
python -m http.server 8000
```

## Contributing
1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License
MIT License

## Contact
Dr. Muhammad Farrukh Qureshi
- Email: dr.farrukh89@gmail.com
- Google Scholar: [Profile](https://scholar.google.com/citations?user=yFCfrCUAAAAJ)
