import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3", "tag4"],
  };
  //   styles = {
  //     fontSize: 30,
  //     fontWeight: "bold",
  //   };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}> {tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement() {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
          style={{ cursor: "pointer" }}
        >
          +
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          // onClick={this.handleDelete()}
        >
          del
        </button>
        {this.renderTags()}
        {this.state.tags.length === 0 && "please create a new tag"}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "p-2 m-2 badge badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
