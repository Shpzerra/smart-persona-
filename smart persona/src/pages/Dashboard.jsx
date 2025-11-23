import React, { useState } from "react";
import "../styles/Dashboard.css";
import { Link } from "react-router-dom";

// ข้อมูลตัวอย่างสำหรับสมชาย
const profileData = {
    name: "สมชาย ใจดีมาก",
    position: "Web Developer",
    location: "Thailand",
    experience: "4 years",
    skills: ["Laravel", "Vue js SEO", "SEO"],
    imageUrl: "/images/somchai_avatar.png" // ต้องเปลี่ยนเป็น path จริง
};

const ProfileCard = () => {
    return (
        <div className="profile-card"> {/* องค์ประกอบหลักของการ์ด */}
            <div className="card-header">
                {/* ปุ่ม Bookmark/บันทึก (ด้านบนขวา) */}
                <div className="bookmark-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                </div>
            </div>
            
            <div className="profile-info-section">
                {/* รูปโปรไฟล์ */}
                <div className="profile-avatar-container">
                    <img src={profileData.imageUrl} alt={`Profile of ${profileData.name}`} className="profile-avatar" />
                </div>
                
                {/* รายละเอียดชื่อและตำแหน่ง */}
                <h3 className="profile-name">{profileData.name}</h3>
                <p className="profile-position">
                    **{profileData.position}**<br />
                    {profileData.location} | {profileData.location === 'Thailand' ? '🇹🇭' : '🇺🇸'}
                </p>
                
                {/* ประสบการณ์ */}
                <div className="profile-experience">
                    &lt;- Experience - **{profileData.experience}**
                </div>
            </div>

            {/* ส่วนทักษะ/Skill Tags */}
            <div className="skill-tags-container">
                {profileData.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProfileCard;