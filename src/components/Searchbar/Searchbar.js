import React, { Component } from 'react';
import styles from './Searchbar.module.scss';

class Searchbar extends Component {
  state = {
    query: '',
  };
  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label>
          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.btn} type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Searchbar;
