import "dotenv/config";
import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { PrismaClient } from "@prisma/client";
import { auth } from "./auth.js";

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 8001;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

// Better Auth handler — must be before express.json() for its own routes
app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());

// --- JOBS API ---
app.get("/jobs", async (req, res) => {
    const jobs = await prisma.job.findMany({ orderBy: { createdAt: 'desc' } });
    res.json(jobs);
});

app.post("/jobs", async (req, res) => {
    const job = await prisma.job.create({ data: req.body });
    res.status(201).json(job);
});

app.patch("/jobs/:id", async (req, res) => {
    const job = await prisma.job.update({ where: { id: req.params.id }, data: req.body });
    res.json(job);
});

// --- DEPARTMENTS API ---
app.get("/departments", async (req, res) => {
    const depts = await prisma.department.findMany();
    res.json(depts);
});

app.post("/departments", async (req, res) => {
    const dept = await prisma.department.create({ data: req.body });
    res.status(201).json(dept);
});

app.patch("/departments/:id", async (req, res) => {
    const dept = await prisma.department.update({ where: { id: req.params.id }, data: req.body });
    res.json(dept);
});

app.delete("/departments/:id", async (req, res) => {
    await prisma.department.delete({ where: { id: req.params.id } });
    res.json({ success: true });
});

// --- USERS API ---
app.get("/signupuser", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

app.get("/signupuser/:id", async (req, res) => {
    const user = await prisma.user.findUnique({ where: { id: req.params.id } });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
});

app.put("/signupuser/:id", async (req, res) => {
    const { fname, lname, status, jobtitle, interviewDate } = req.body;
    const user = await prisma.user.update({
        where: { id: req.params.id },
        data: { fname, lname, status, jobtitle, interviewDate }
    });
    res.json(user);
});

app.delete("/signupuser/:id", async (req, res) => {
    await prisma.user.delete({ where: { id: req.params.id } });
    res.json({ success: true });
});

// --- JOBSTO (Mock applications) ---
app.post("/jobsto", async (req, res) => {
    res.status(201).json({ success: true, message: "Applied successfully" });
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
