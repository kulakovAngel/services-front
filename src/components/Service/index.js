import React from 'react';
import { connect } from 'react-redux';

import { IMG_URL } from './../../consts';
//import classes from './style.module.css';


class Service extends React.Component {
  render() {
    const { content, className } = this.props
    return (
      <section key={content.id} className={ className }>
        <h2>{ content.title }</h2>
        <p>
            <img src={ `${IMG_URL}/${content.title}.jpg` } alt={content.title} title={content.title}/>
              { content.description }
        </p>
        <button>Заказать</button>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Service);