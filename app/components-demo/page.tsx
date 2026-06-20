"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "@/components/ui";

export default function ComponentsDemoPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mb-10 text-4xl font-bold">
          Component Library Demo
        </h1>

        {/* Buttons */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            Buttons
          </h2>

          <div className="flex gap-4">
            <Button>Primary</Button>

            <Button variant="secondary">
              Secondary
            </Button>

            <Button variant="outline">
              Outline
            </Button>
          </div>
        </section>

        {/* Input */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            Input
          </h2>

          <Input
            label="Email"
            placeholder="Enter email"
          />
        </section>

        {/* Modal */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            Modal
          </h2>

          <Button onClick={() => setOpen(true)}>
            Open Modal
          </Button>

          <Modal
            isOpen={open}
            title="Demo Modal"
            onClose={() => setOpen(false)}
          >
            <p>
              This is a reusable modal component.
            </p>
          </Modal>
        </section>

        {/* Toast */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            Toast
          </h2>

          <Toast
            message="Successfully created booking!"
            type="success"
          />
        </section>

        {/* Loader */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">
            Loader
          </h2>

          <Loader />
        </section>
      </main>

      <Footer />
    </>
  );
}