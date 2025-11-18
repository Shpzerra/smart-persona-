import React from "react";
import "./HRRegister.css";
import { Link } from "react-router-dom"; 

export default function HRRegister() {
  return (
    <div className="register-page">

      {/* ปุ่มกลับ */}
      <button className="back-btn">
        <span className="icon">⟵</span> กลับเข้าสู่หน้าหลัก
      </button>

      {/* ชื่อระบบ */}
      <h1 className="title">PerFile</h1>

      {/* กล่องสมัคร */}
      <div className="register-box">

        {/* ข้อความบนขวา */}
       <div className="top-right-text">
 <a href="http://localhost:4000/"> คุณเป็นผู้หางานหรือเปล่า?</a>
</div>

        <p className="register-title">ลงทะเบียน</p>

        <p className="sub-warn">*ใช้ข้อมูลของทางบริษัท</p>

        {/* ปุ่ม Google */}
       <button className="google-btn">
          {/* ⬇️ โค้ด SVG ไอคอน Google ใหม่ ⬇️ */}
          <svg viewBox="0 0 48 48" width="20" height="20" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.15 30.49 0 24 0 14.65 0 6.68 5.3 3.29 13.01l7.66 5.86C12.59 13.78 17.81 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.75 24.53c0-1.54-.14-3.04-.41-4.5H24v8.52h12.55c-.56 3.84-2.88 7.03-6.14 9.17l7.66 5.86C43.51 39.15 46.75 32.32 46.75 24.53z"/>
            <path fill="#FBBC05" d="M10.95 29.17c-.52-1.54-.81-3.19-.81-4.87s.29-3.33.81-4.87L3.29 13.01C1.22 17.02 0 20.65 0 24.53s1.22 7.51 3.29 11.52l7.66-5.87z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.96-2.13 15.96-5.73l-7.66-5.86c-2.48 1.6-5.6 2.54-8.3 2.54-6.19 0-11.41-4.28-13.3-10.04l-7.66 5.86C6.68 42.7 14.65 48 24 48z"/>
            <path fill="none" d="M0 0h48v48H0z"/>
          </svg>
          {/* ⬆️ โค้ด SVG ไอคอน Google ใหม่ ⬆️ */}
          ดำเนินการด้วยบัญชี Google
        </button>


        <div className="divider">หรือ</div>

        {/* ฟอร์ม */}
        <div className="form-group">
          <label>ชื่อบริษัท</label>
          <input type="text" placeholder="ชื่อบริษัท" />
        </div>

        <div className="form-group">
          <label>ชื่อพนักงาน</label>
          <input type="text" placeholder="ชื่อพนักงาน" />
        </div>

        <div className="form-group">
          <label>อีเมล</label>
          <input type="email" placeholder="อีเมล" />
        </div>

        <div className="form-group">
          <label>กำหนดรหัสผ่าน</label>
          <input type="password" placeholder="รหัสผ่าน" />
        </div>

        <button className="submit-btn">ลงทะเบียน</button>

        <p className="login-text">
          ยังมีบัญชีแล้วใช่ไหม? <a href="http://localhost:4000/HRLogin">เข้าสู่ระบบ</a>
        </p>
      </div>
    </div>
  );
}
