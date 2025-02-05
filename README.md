
# 🌍 Crowdcube: A Crowd Funding Application

![Screenshot 2025-02-05 173353](https://github.com/user-attachments/assets/7afff392-fc91-41ef-9bb7-9e04a6a1740a)


## 🚀 Live Project
🔗 **Live Site:** [Click here](https://muktadir-alam.web.app/)
🔗 **Server Repo:** [Click here](https://crowdcube-server-nine.vercel.app/)  

---

## 📌 Project Overview  
**Crowdcube** is a crowdfunding platform that allows users to create, explore, and contribute to campaigns. It helps people raise funds for personal needs, startups, businesses, and creative ideas. Users can add campaigns, donate to campaigns, and manage their own contributions.  

---

## ✨ Features  
✅ **Authentication System** (Email/Password & Google Login)  
✅ **CRUD Operations** (Create, Update, Delete Campaigns)  
✅ **Protected Routes** (Users can only manage their campaigns)  
✅ **Secure Donation System**  
✅ **Real-time Campaign Management**  
✅ **Dark/Light Mode Toggle**  
✅ **Sorting & Filtering** (Sort campaigns by donation amount)  
✅ **Dynamic UI with Animations** (Lottie React, Typewriter Effect)  
✅ **404 Page & Loading Spinner**  

---

## 🛠 Technologies Used  
### **Frontend**  
- React.js (Vite)  
- TailwindCSS + DaisyUI  
- React Router Dom  
- React Icons  
- React Hot Toast  
- Swiper (Carousel)  
- Lottie React  
- React Simple Typewriter  
- SweetAlert2  

### **Backend**  
- Node.js & Express.js  
- MongoDB & Mongoose  
- Firebase Authentication  
- JWT Authentication  

---

## 📦 Installation  

1️⃣ **Clone the repository**  
```sh
git clone https://github.com/your-username/crowdcube.git
cd crowdcube
```

2️⃣ **Install dependencies**  
```sh
npm install
```

3️⃣ **Set up environment variables** (see below)  

4️⃣ **Run the development server**  
```sh
npm run dev
```

---

## 🔑 Environment Variables  
Create a `.env` file in the root directory and add:

```plaintext
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_SERVER_URL=your_backend_api_url
```

---

## 📂 Folder Structure  
```plaintext
📂 client/
 ├── 📂 src/
 │   ├── 📂 components/
 │   ├── 📂 pages/
 │   ├── 📂 hooks/
 │   ├── 📂 utils/
 │   ├── 📜 main.jsx
 │   ├── 📜 App.jsx
 │   └── 📜 index.css
 ├── 📜 .env
 ├── 📜 package.json
 ├── 📜 README.md

📂 server/
 ├── 📂 models/
 ├── 📂 routes/
 ├── 📂 controllers/
 ├── 📂 middleware/
 ├── 📜 server.js
 ├── 📜 .env
 ├── 📜 package.json
 ├── 📜 README.md
```

---

## 🔗 API Endpoints  

### **Authentication**  
- `POST /api/auth/register` - Register a new user  
- `POST /api/auth/login` - Log in a user  
- `POST /api/auth/google` - Google OAuth login  

### **Campaigns**  
- `GET /api/campaigns` - Get all campaigns  
- `GET /api/campaigns/:id` - Get a single campaign  
- `POST /api/campaigns` - Create a new campaign  
- `PUT /api/campaigns/:id` - Update campaign details  
- `DELETE /api/campaigns/:id` - Delete a campaign  

### **Donations**  
- `POST /api/donations` - Donate to a campaign  
- `GET /api/donations` - Get all donations for logged-in user  

---

## 🚀 Usage  

### **User Capabilities**  
- Browse all campaigns and see details  
- Create, update, and delete their own campaigns  
- Donate to campaigns securely  
- View their donation history in **My Donations**  

### **Admin Capabilities**  
- Manage users & campaigns  
- Approve campaigns for funding  





---

## 🤝 Contributing  

Contributions are welcome! To contribute:  
1. Fork the repository  
2. Create a new branch (`git checkout -b feature-name`)  
3. Commit your changes (`git commit -m 'Add new feature'`)  
4. Push to your branch (`git push origin feature-name`)  
5. Open a pull request  

---

## 📜 License  
This project is licensed under the **crowd cube**.

---

Made with ❤️ by Muktadir Alam
```

---

### 🔥 Why This README Stands Out:
✔ **Structured & Professional**  
✔ **Clear Project Overview**  
✔ **Screenshots & Live Links**  
✔ **Step-by-step Installation Guide**  
✔ **API Endpoints for Developers**  
✔ **Contribution Guidelines**  

Let me know if you'd like any changes! 🚀🔥
