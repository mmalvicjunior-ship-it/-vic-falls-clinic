"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    department: "ear",
    doctor: "",
    message: ""
  });

  const [doctors, setDoctors] = useState<{id:string;full_name:string;speciality:string|null}[]>([]);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  useEffect(()=>{ fetch("/api/doctors-public").then(r=>r.json()).then(j=>setDoctors(j.doctors||[])); const q=new URLSearchParams(location.search).get("doctor"); if(q) setFormData(f=>({...f,doctor:q})); },[]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setBusy(true); setMsg("");
    try{
      const sel = doctors.find(d=>d.full_name===formData.doctor);
      const r = await fetch("/api/appointments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:formData.name,email:formData.email,phone:formData.phone,date:formData.date,time:formData.time,department:formData.department,message:formData.message,doctor_id:sel&&!sel.id.startsWith("sample")?sel.id:null})});
      const j = await r.json();
      setMsg(j.ok?"Appointment request submitted. We will confirm within 24 hours.":(j.error||"Something went wrong."));
    }catch{ setMsg("Network error. Please try again."); }
    setBusy(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Book an Appointment
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Schedule your visit with our experienced ENT specialists
          </p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number *</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preferred Date *</label>
                <input type="date" name="date" required value={formData.date} onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preferred Time</label>
                <select name="time" value={formData.time} onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <option value="">Select time</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="13:00">01:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Department *</label>
                <select name="department" value={formData.department} onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <option value="ear">Ear Care</option>
                  <option value="nose">Nose & Sinus</option>
                  <option value="throat">Throat & Voice</option>
                  <option value="general">General ENT</option>
                  <option value="surgery">ENT Surgery</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preferred Doctor (Optional)</label>
              <select name="doctor" value={formData.doctor} onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <option value="">Any available</option>
                {doctors.map(d=><option key={d.id} value={d.full_name}>{d.full_name}{d.speciality?` — ${d.speciality}`:""}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Additional Information</label>
              <textarea name="message" rows={4} value={formData.message} onChange={handleChange}
                placeholder="Briefly describe your symptoms or any special requests"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            </div>

            {msg&&<p className="text-sm text-center text-teal-dark">{msg}</p>}
            <Button type="submit" variant="primary" size="lg" className="w-full" disabled={busy}>
              {busy?"Submitting…":"Book Appointment"}
            </Button>

            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              We&apos;ll confirm your appointment within 24 hours
            </p>
          </form>
        </Card>
      </div>
    </div>
  );
}
