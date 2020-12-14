import React from "react";
import Modal, { ModalController } from "..//Modal";

export default {
  title: "Catalyst/Modal",
  component: Modal,
};

const Template = (args) => (
  <>
    <Modal {...args} />
    <ModalController className="modal__button" modalID="modal1">
      Open Modal 1
    </ModalController>
  </>
);
export const Example = Template.bind({});
Example.args = {
  id: "modal1",
  className: "modal",
  children: (
    <>
      &quot;There is no one who loves pain itself, who seeks after it and wants
      to have it, simply because it is pain...&quot;
    </>
  ),
};
