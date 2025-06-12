import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import LoginForm from "../src/components/LoginForm.vue";

describe("Login Form", () => {
  it("should error when not input either username or password", () => {
    const comp = mount(LoginForm);

    comp.get("#username").setValue("email@gmail.com");
    comp.get("#form").trigger("submit")

    expect(comp.vm.$data.form.username).to.be.a.string("email@gmail.com");
  });
});
