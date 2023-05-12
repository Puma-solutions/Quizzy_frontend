import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import styles from "../../styles/access.module.css";
import { SwapOutlined } from "@ant-design/icons";
import OnlyNavLayout from "@/components/common/layout/onlyNav";

const AccessPage = () => {
  const [positionCover, setPositionCover] = useState(100);
  const [rotationSwitch, setRotationSwitch] = useState(0);
  const [modeForm, setModeForm] = useState(true);
  const handleSwitchForm = () => {
    if (positionCover === 100) {
      setPositionCover(0);
      setRotationSwitch(360);
      setModeForm(false);
    } else {
      setPositionCover(100);
      setRotationSwitch(0);
      setModeForm(true);
    }
  };
  return (
    <OnlyNavLayout>
      <div className={styles.accessPage}>
        <div className={styles.accessFormsContainer}>
          <Form
            name="basic"
            labelCol={{ span: 20 }}
            layout="vertical"
            wrapperCol={{ span: 40 }}
            initialValues={{ remember: true }}
            className={styles.formAccess}
            disabled={!modeForm}
          >
            <h3 className={styles.accessTitle}>Iniciar sesion</h3>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message:
                    "Debes ingresar tu email correctamente para iniciar sesion",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Ingresa una contraseña valida",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ span: 16 }}
            >
              <Checkbox>Recuerdame</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 0 }}>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.submitButton}
              >
                Iniciar sesion
              </Button>
            </Form.Item>
          </Form>
          <Form
            name="basic"
            labelCol={{ span: 20 }}
            layout="vertical"
            wrapperCol={{ span: 40 }}
            initialValues={{ remember: true }}
            className={styles.formAccess}
            disabled={modeForm}
          >
            <h3 className={styles.accessTitle}>Registrarme</h3>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message:
                    "Debes ingresar tu email correctamente para registrarte",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="fullname"
              label="Nombre completo"
              rules={[
                {
                  required: true,
                  type: "string",
                  message: "Debes ingresar un nombre para registrarte",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Ingresa una contraseña valida",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 0 }}>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.submitButton}
              >
                Registrarme
              </Button>
            </Form.Item>
          </Form>
          <div
            className={styles.coverAccess}
            style={{ transform: `translate(${positionCover}%, 0px)` }}
          ></div>
          <button
            className={styles.swapAccessForm}
            onClick={handleSwitchForm}
            style={{
              transform: `rotate(${rotationSwitch}deg)`,
            }}
            title="Clickea para cambiar entre login/register"
          >
            <SwapOutlined />
          </button>
        </div>
      </div>
    </OnlyNavLayout>
  );
};

export default AccessPage;
