import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { IMG_URL } from './../../consts';
//import classes from './style.module.css';


class Service extends React.Component {
  render() {
    const { content, className } = this.props
    return (
      <section key={content.id} className={ className }>
        <Link to={`/services/${content.id}`}>
          <h2>{ content.title }</h2>
        </Link>
        <p>
            <img src={ `${IMG_URL}/${content.title}.jpg` } alt={content.title} title={content.title}/>
              { content.description.slice(0, 150) }...
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