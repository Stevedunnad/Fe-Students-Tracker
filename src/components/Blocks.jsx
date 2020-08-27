import React, { Component } from "react";
import * as api from "./../utils/api";
import "./Blocks.css";

export default class Block extends Component {
  state = {
    blocks: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getAllBlocks().then((blocks) => {
      this.setState({ blocks, isLoading: false });
    });
  }
  render() {
    const { blocks, isLoading } = this.state;
    if (isLoading) return <p>Loading ...</p>;


    return (
      <main className="blocks">
        {blocks.map((block) => (
          <div className="block" key={block._id}>
            <h1 className="block-name">{block.name}</h1>
            <p className="block-num">{block.number}</p>
            <p className="block-slug">{block.slug}</p>
          </div>
        ))}
      </main>
    );
  }
}
/*<table>
        <thead>
          <tr>
            <th>Numer</th>
            <th>Name</th>
            <th>Slug</th>
          </tr>
        </thead>
        <tbody>
          {blocks.map((block) => (
            <tr key={block.id}>
              <td>{block.number}</td>
              <td>{block.name}</td>
              <td>{block.slug}</td>
            </tr>
          ))}
        </tbody>
      </table>*/