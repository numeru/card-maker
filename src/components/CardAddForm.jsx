import React, { memo, useRef, useState } from "react";
import styles from "./CardAddForm.module.css";
import Button from "./button";

const CardEditForm = memo(({ onAdd, FileInput }) => {
  const [file, setFile] = useState({ fileName: null, fileURL: null });
  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    onAdd(card);
  };
  return (
    <form className={styles.form} ref={formRef}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        placeholder="Name"
        name="name"
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        placeholder="Company"
        name="company"
      />
      <select ref={themeRef} className={styles.select} name="theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        placeholder="Title"
        name="title"
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        placeholder="Email"
        name="email"
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        placeholder="Message"
        name="message"
      />
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <div className={styles.submitBtn}>
        <Button name="Add" onClick={onSubmit} />
      </div>
    </form>
  );
});

export default CardEditForm;
