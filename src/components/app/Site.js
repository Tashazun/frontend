import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; //eslint-disable-line
import { tryLoadUser } from '../profile/actions';
import { getCheckedAuth } from '../profile/reducers';
import Auth from '../profile/Auth';
import PrivateRoute from '../shared/PrivateRoutes';
import Landing from '../app/Landing';
import Home from '../home/Home';
import Browse from '../browse/Browse';
import MovieDetail from '../movies/MovieDetail';
import Profile from '../profile/Profile';
import WatchList from '../profile/Watchlist';
import ReviewForm from '../shared/ReviewForm';
import Reviews from '../reviews/Reviews';
import Search from '../nav/Search';
import Header from '../home/Header';
import Nav from '../nav/Nav';
import styles from './Site.scss';

class Site extends PureComponent {

  static propTypes = {
    tryLoadUser: PropTypes.func.isRequired,
    checkedAuth: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.tryLoadUser();
  }

  render() {
    const { checkedAuth } = this.props;

    return (
      <section id="site-wrapper" className={styles.siteWrapper}>
        <Header />
        <div id="site">
          { checkedAuth &&
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/home" component={Home}/>
              <Route path="/auth" component={Auth}/>
              <Route path="/browse" component={Browse}/>
              <PrivateRoute path="/movies/:movieId/write" component={ReviewForm}/>
              <PrivateRoute path="/reviews/:reviewId/edit" component={ReviewForm}/>
              <Route path="/movies" component={MovieDetail}/>
              <Route path="/reviews" component={Reviews}/>
              <Route path="/search" component={Search}/>
              <PrivateRoute path="/profile" component={Profile}/>
              <PrivateRoute path="/watchlist" component={WatchList}/>
              <Redirect to="/home"/>
            </Switch>
          }
        </div>
        <Nav/>
      </section>
    );
  }
}

export default connect(
  state => ({ checkedAuth: getCheckedAuth(state) }),
  { tryLoadUser }
)(Site);
