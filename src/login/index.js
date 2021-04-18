import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

function Login() {
    return (
      <div className="login">
         <Form>
          <Form.Field>
            <label>ID</label>
            <input placeholder='ID' />
          </Form.Field>
          <Form.Field>
            <label>PASSWORD</label>
            <input placeholder='PASSWORD' />
          </Form.Field>
          <Form.Field>
            <Checkbox label='로그인 정보 기억하기' />
          </Form.Field>
          <Button type='submit'>로그인</Button>
        </Form>
      </div>
    );
  }
  
  export default Login;
  