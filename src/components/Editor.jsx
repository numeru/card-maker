import React from "react";
import styles from "./Editor.module.css";
import CardEditForm from "./CardEditForm";
import CardAddForm from "./CardAddForm";

const Editor = ({ cards, addCard, updateCard, deleteCard, FileInput }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    <div className={styles.forms}>
      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          FileInput={FileInput}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      ))}
      <CardAddForm onAdd={addCard} FileInput={FileInput} />
    </div>
  </section>
);

export default Editor;
