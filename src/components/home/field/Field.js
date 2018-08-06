import React, { Component } from "react";
import "./field.sass";

import Canvas from "src/components/shared/ui/canvas/Canvas";
import FieldManager from "src/models/field/FieldManager";

export default class Field extends Component {
  constructor(){
    super();

    this.fieldManager = new FieldManager("", 1000, 1000, 10, "Sand", [], []);
  }

  render() {
    return (
      <section className="field">
        <Canvas
          fieldWidth={this.fieldManager.width}
          fieldHeight={this.fieldManager.height}
          fieldBackgroundType={this.fieldManager.backgroundType}
        />
      </section>
    );
  }
}

