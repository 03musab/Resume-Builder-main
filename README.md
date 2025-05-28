# 🧠 AI-Powered Resume Builder

The **AI Resume Builder** is a modern web application built with **React** that helps users create, customize, and export professional resumes effortlessly. With a clean interface and AI-assisted features, users can generate impactful resumes in minutes.

![Resume Builder Demo](https://ai-resume-builder-rub2.onrender.com)

## 🚀 Key Features

- **🤖 AI Suggestions**: Smart recommendations for resume content and layout optimization
- **🎨 Drag & Drop Interface**: Intuitive resume editing experience with real-time preview
- **📱 Responsive Design**: Mobile-friendly and visually clean layout using **Bootstrap** and **React Bootstrap**
- **📄 PDF Export**: Seamlessly export resumes using `react-to-print` with professional formatting
- **🔐 User Authentication**: Secure login and data handling via **Firebase Authentication**
- **🧭 Navigation**: Smooth transitions between sections using **React Router**
- **✅ Testing Ready**: Built with **Jest** and **React Testing Library** for reliability
- **💾 Auto-Save**: Automatic saving of resume progress to prevent data loss

## 🛠️ Tech Stack

| Technology       | Purpose                           | Version |
|------------------|-----------------------------------|---------|
| React            | Core frontend framework           | ^18.0.0 |
| Bootstrap        | Responsive styling                | ^5.3.0  |
| React Bootstrap  | React components for Bootstrap    | ^2.8.0  |
| React Router     | Routing and navigation            | ^6.0.0  |
| Firebase         | Authentication / backend services | ^9.0.0  |
| React To Print   | Resume export to PDF              | ^1.14.0 |
| Jest + RTL       | Unit and UI testing               | Latest  |

## 📁 Project Structure

```
resume-builder/
├── public/                     # Static files
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── assets/                 # Images, icons, and static resources
│   │   ├── images/
│   │   └── icons/
│   ├── components/             # Reusable UI components
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── ResumePreview/
│   │   ├── FormSections/
│   │   └── common/
│   ├── context/                # Global state management
│   │   ├── AuthContext.js
│   │   └── ResumeContext.js
│   ├── pages/                  # App pages
│   │   ├── Home/
│   │   ├── Editor/
│   │   ├── Login/
│   │   ├── Register/
│   │   └── Dashboard/
│   ├── styles/                 # Custom CSS/SASS
│   │   ├── globals.css
│   │   └── components/
│   ├── utils/                  # Helper functions
│   │   ├── resumeHelpers.js
│   │   └── aiSuggestions.js
│   ├── hooks/                  # Custom React hooks
│   ├── services/               # API and external services
│   │   ├── firebase.js
│   │   └── aiService.js
│   ├── App.js                  # Main app component
│   ├── App.css
│   └── index.js                # Entry point
├── package.json
├── README.md
└── .env.example                # Environment variables template
```

## ⚙️ Getting Started

### Prerequisites

- **Node.js** (v16+ recommended)
- **npm** or **yarn** package manager
- **Firebase project** (for authentication & optional storage)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/ai-resume-builder.git
   cd ai-resume-builder
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

4. **Set up Firebase**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password, Google, etc.)
   - Enable Firestore Database (optional, for saving resumes)
   - Add your web app configuration to the `.env.local` file

5. **Start the Development Server**
   ```bash
   npm start
   # or
   yarn start
   ```

The app will open at `http://localhost:3000`

## 🧪 Testing

Run the test suite:
```bash
npm test
# or
yarn test
```

Run tests with coverage:
```bash
npm test -- --coverage
```

## 📦 Build for Production

Create an optimized production build:
```bash
npm run build
# or
yarn build
```

The build files will be generated in the `build/` directory.

## 🚀 Deployment Options

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"
npm run deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 API Documentation

### Firebase Authentication
- `/login` - User authentication
- `/register` - User registration
- `/logout` - User logout

### Resume Data Structure
```javascript
{
  id: "unique_id",
  userId: "user_id",
  personalInfo: {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    location: "City, Country"
  },
  sections: {
    experience: [...],
    education: [...],
    skills: [...],
    projects: [...]
  },
  template: "modern",
  createdAt: "timestamp",
  updatedAt: "timestamp"
}
```

## 🐛 Known Issues

- PDF export may not preserve custom fonts in some browsers
- Mobile drag & drop functionality is limited on older devices
- AI suggestions require internet connection

## 📋 Roadmap

- [ ] Multiple resume templates
- [ ] LinkedIn profile import
- [ ] Advanced AI content suggestions
- [ ] Collaborative resume editing
- [ ] Resume analytics and optimization tips
- [ ] Integration with job boards
- [ ] Multi-language support

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Security Notice

- **Never commit your Firebase API keys or sensitive information to version control**
- Always use environment variables for configuration
- Enable Firebase security rules for production deployment

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-username/ai-resume-builder/issues) page
2. Create a new issue with detailed information
3. Join our [Discord community](https://discord.gg/your-invite) for real-time help

## 🙏 Acknowledgments

- React community for excellent documentation
- Firebase team for seamless backend services
- Bootstrap team for responsive design components
- All contributors who helped improve this project

---

**✨ AI Resume Builder** — Your smarter way to craft the perfect resume.

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Backend-Firebase-FFCA28?style=flat-square&logo=firebase)](https://firebase.google.com/)
[![Bootstrap](https://img.shields.io/badge/UI-Bootstrap-7952B3?style=flat-square&logo=bootstrap)](https://getbootstrap.com/)

⭐ **Star this repository if you found it helpful!**
