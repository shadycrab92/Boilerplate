import React from "react";
import "./search.sass";

import Button from "src/components/shared/ui/button/Button";
import Input from "src/components/shared/ui/input/Input";

const Search = (props) => {
  return (
    <section className="search">
      <div className="search__top">
        <Button className="search__topButton active" styles="is-transparent is-medium">Перевозка</Button>
        <Button className="search__topButton" styles="is-transparent is-medium">Покупка</Button>
        <Button className="search__topButton" styles="is-transparent is-medium">Продажа</Button>
      </div>
      <div className="search__body">
        <Input label="Откуда" styles="is-light"/>
        <Input label="Куда"  styles="is-light"/>
        <Button styles="is-fullwidth is-primary">Найти</Button>
      </div>
    </section>
  );
};

export default Search;

