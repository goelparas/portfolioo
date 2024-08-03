"use server";

import React from "react";
import { Resend } from "resend";

import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);
