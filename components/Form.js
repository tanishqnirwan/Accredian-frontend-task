import React, { useState } from 'react';
import { Modal, Form, Input, Button, notification } from 'antd';
import axios from 'axios';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://accredian-backend-task-yjtc.onrender.com';

const ReferralForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
  
      await axios.post(`https://accredian-backend-task-9wki.onrender.com/referral`, values);
      notification.success({
        message: 'Referral Submitted',
        description: 'Your referral has been successfully submitted!',
      });
      handleCloseModal();
    } catch (error) {
      console.error('Submission error:', error);
      console.error('Error details:', error.response?.data);
      notification.error({
        message: 'Submission Failed',
        description: 'There was an error submitting your referral.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center font-sans">
      <Button
        type="primary"
        onClick={handleOpenModal}
        className="w-44 h-16 text-xl font-semibold bg-blue-600 hover:bg-blue-700"
      >
        Refer Now
      </Button>

      <Modal
        title={<h2 className="text-2xl font-bold text-blue-600">Referral Form</h2>}
        open={isModalVisible}
        onCancel={handleCloseModal}
        footer={null}
        width={600}
        centered
      >
        <Form layout="vertical" onFinish={handleSubmit}>
          <div className="mb-5 p-4 border border-gray-200 rounded-lg">
            <h3 className="mb-4 text-lg font-bold text-blue-600">Your Details</h3>
            <Form.Item
              label={<span className="font-semibold">Full Name</span>}
              name="referrerName"
              rules={[{ required: true, message: 'Please enter your full name!' }]}
            >
              <Input placeholder="Your full name" className="p-2 border rounded-md w-full" />
            </Form.Item>

            <Form.Item
              label={<span className="font-semibold">Email Address</span>}
              name="referrerEmail"
              rules={[{ required: true, message: 'Please enter your email address!' }, { type: 'email', message: 'Please enter a valid email!' }]}
            >
              <Input placeholder="Your email address" className="p-2 border rounded-md w-full" />
            </Form.Item>
          </div>

          <div className="mb-5 p-4 border border-gray-200 rounded-lg">
            <h3 className="mb-4 text-lg font-bold text-blue-600">Referee Details</h3>
            <Form.Item
              label={<span className="font-semibold">Full Name</span>}
              name="refereeName"
              rules={[{ required: true, message: 'Please enter the referee\'s full name!' }]}
            >
              <Input placeholder="Referee's full name" className="p-2 border rounded-md w-full" />
            </Form.Item>

            <Form.Item
              label={<span className="font-semibold">Email Address</span>}
              name="refereeEmail"
              rules={[{ required: true, message: 'Please enter the referee\'s email address!' }, { type: 'email', message: 'Please enter a valid email!' }]}
            >
              <Input placeholder="Referee's email address" className="p-2 border rounded-md w-full" />
            </Form.Item>

            <Form.Item
              label={<span className="font-semibold">Message</span>}
              name="message"
              rules={[{ required: true, message: 'Please enter a referral message!' }]}
            >
              <Input.TextArea rows={4} placeholder="Your referral message" className="p-2 border rounded-md w-full" />
            </Form.Item>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700"
            >
              Submit Referral
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ReferralForm;