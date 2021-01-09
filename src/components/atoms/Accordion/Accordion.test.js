import React from "react";
import { render, screen, fireEvent } from "test-utils";

import Accordion from "./Accordion";

const title = "My title";
const text = "My children text";

test("render twith title", () => {
  render(<Accordion title={title}></Accordion>);

  expect(screen.getByText(title)).toBeInTheDocument();
});

test("render without children", () => {
  render(<Accordion>{text}</Accordion>);
  //inicia fechado, logo é esperado não encontrar o children
  expect(screen.queryByText(text)).not.toBeInTheDocument();
});

test("triggers onChange when it is clicked", async () => {
  const handleChange = jest.fn();

  render(<Accordion title={title} onChange={handleChange}></Accordion>);

  await fireEvent.click(screen.getByText(title));

  expect(handleChange).toBeCalledTimes(1);
});

describe("when is controlled", () => {
  describe("when starts opened", () => {
    test("renders with children", () => {
      render(<Accordion open>{text}</Accordion>);

      expect(screen.getByText(text)).toBeInTheDocument();
    });

    test("triggers onChange when is clicked", async () => {
      const handleChange = jest.fn();
      render(
        <Accordion title={title} onChange={handleChange} open>
          {text}
        </Accordion>
      );

      await fireEvent.click(screen.getByText(title));

      expect(handleChange).toBeCalledTimes(1);
    });

    test("call default when it is clicked", async () => {
      render(
        <Accordion title={title} open>
          {text}
        </Accordion>
      );

      await fireEvent.click(screen.getByText(title));
    });

    test("hide children when open changes to false", () => {
      const { rerender } = render(
        <Accordion title={title} open>
          {text}
        </Accordion>
      );

      rerender(
        <Accordion title={title} open={false}>
          {text}
        </Accordion>
      );

      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
  });

  describe("when starts closed", () => {
    test("renders with children", () => {
      render(<Accordion open={false}>{text}</Accordion>);

      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
  });
});
