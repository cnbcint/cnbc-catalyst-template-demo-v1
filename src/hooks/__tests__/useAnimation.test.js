import useAnimation from "../useAnimation";
import { renderHook, act } from "@testing-library/react-hooks";
import useIntersectionObserver from "../useIntersectionObserver";
jest.mock("../useIntersectionObserver");
const element = document.createElement("div");
element.classList.add("test");

useIntersectionObserver.mockReturnValue({
  nodeRef: { current: element },
  isIntersecting: false,
});

describe("useAnimation", () => {
  test("it returns a play function", () => {
    const { result } = renderHook(() => useAnimation());
    expect(result.current.play).toBeInstanceOf(Function);
  });

  test("it returns a reset function", () => {
    const { result } = renderHook(() => useAnimation());
    expect(result.current.reset).toBeInstanceOf(Function);
  });
  test("it returns a react ref ", () => {
    const { result } = renderHook(() => useAnimation());
    expect(result.current.ref).toMatchObject({ current: element });
  });

  test("it add the correct initial state class", () => {
    renderHook(() => useAnimation());
    expect(element.classList.contains("pre-animated")).toBe(true);
  });

  test("it add the correct class to start animation", () => {
    useIntersectionObserver.mockReturnValue({
      nodeRef: { current: element },
      isIntersecting: true,
    });

    renderHook(() => useAnimation({ autoStart: true }));
    act(() => {
      useIntersectionObserver.mock.calls[4][0]();
    });

    expect(element.classList.contains("animated")).toBe(true);
    expect(element.classList.contains("fadeIn")).toBe(true);
  });
});
