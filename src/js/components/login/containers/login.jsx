import React from 'react';
import {Row, Input, Button, Icon} from 'react-materialize';
import {Link, withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

//Actions
import {login} from '../../../actions/session';
import loginAvatar from '../../../../media/images/png/Key-1.png';

const mapStateToProps = (state, props) => {
    return {
        auth:state.authenticateReducer,
        session:state.sessionReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    const actions = {
        login: bindActionCreators(login, dispatch),
    };
    return actions;
}

class Login extends React.Component{
    handleSubmit = (event, history) =>{
        event.preventDefault();
        let user = JSON.stringify({
            username:this.inputUsername.input.value,
            password:this.inputPassword.input.value
        });
        this.props.login(user, history);
    }
    setInputUsername = (element) => {
        this.inputUsername = element;
    }
    setInputPassword = (element) => {
        this.inputPassword = element;
    }
    render(){
        const SubmitButton = withRouter(({ history }) => (
            <Button
                className='red' type='submit' waves='light'
                onClick={(event) => this.handleSubmit(event, history)}>
                Iniciar sesión<Icon right>send</Icon>
            </Button>
        ));
        return (
            <div className='container-center padding-simple margin-top-bottom-3'>
                <div className='login z-depth-3'>
                    <div className='login-header'>
                        <figure className='login-header-figure'>
                            <img className='login-header-figure-avatar z-depth-2' src={loginAvatar} alt={'Login'}/>
                        </figure>
                        <div>
                            <h5 className='login-title grey-text center-align'> Inicio de sesión </h5>
                        </div>
                    </div>
                    <div>
                        <form method='post' onSubmit={this.onSubmit}>
                            <Row>
                                <Input s={12} ref={this.setInputUsername} label={'Nombre de usuario'} validate>
                                    <Icon>account_circle</Icon>
                                </Input>
                                <p className='error font-style-italic center-align red-text font-weight-bolder'> 
                                    {this.props.auth.error? this.props.auth.error.username:''}
                                </p>
                            </Row>
                            <Row>
                                <Input s={12} ref={this.setInputPassword} label={'Contraseña'} type={'password'} validate>
                                    <Icon>security</Icon>
                                </Input>
                                <p className='error font-style-italic center-align red-text font-weight-bolder'> 
                                    {this.props.auth.error? this.props.auth.error.password:''}
                                </p>
                            </Row>
                            <Row className='container-center'>
                                <SubmitButton />
                            </Row>
                        </form>
                    </div>
                    <Row className='container-center'> 
                        <Link to='forget' className='red-text font-weight-bolder hover-underline'> ¿Olvidaste tu contraseña? </Link>
                    </Row>
                    <Row>
                        <p className='error font-style-italic center-align red-text font-weight-bolder'> 
                            {this.props.auth.error? this.props.auth.error.non_field_errors:''}
                        </p>
                    </Row>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);