import { describe, it, expect, vi } from "vitest";
import { reducer, toast, useToast } from "../../hooks/use-toast"; // Adjust import path
import { act, renderHook } from "@testing-library/react";

type Action =
  | {
      type: "ADD_TOAST";
      toast: { id: string; title: string; description: string; open: boolean };
    }
  | { type: "UPDATE_TOAST"; toast: { id: string; title: string } }
  | { type: "DISMISS_TOAST"; toastId: string }
  | { type: "REMOVE_TOAST"; toastId: string };


describe("reducer", () => {
  it("should add a toast to the state", () => {
    const initialState = { toasts: [] };
    const action: Action = {
      type: "ADD_TOAST",
      toast: {
        id: "1",
        title: "Test Toast",
        description: "This is a test toast",
        open: true,
      },
    };

    const newState = reducer(initialState, action);
    expect(newState.toasts).toHaveLength(1);
    expect(newState.toasts[0].id).toBe("1");
    expect(newState.toasts[0].title).toBe("Test Toast");
  });

  it("should update a toast in the state", () => {
    const initialState = {
      toasts: [{ id: "1", title: "Old Toast", open: true }],
    };
    const action: Action = {
      type: "UPDATE_TOAST",
      toast: { id: "1", title: "Updated Toast" },
    };

    const newState = reducer(initialState, action);
    expect(newState.toasts[0].title).toBe("Updated Toast");
  });

  it("should dismiss a toast", () => {
    const initialState = {
      toasts: [{ id: "1", title: "Test Toast", open: true }],
    };
    const action: Action = {
      type: "DISMISS_TOAST",
      toastId: "1",
    };

    const newState = reducer(initialState, action);
    expect(newState.toasts[0].open).toBe(false);
  });

  it("should remove a toast from the state", () => {
    const initialState = {
      toasts: [{ id: "1", title: "Test Toast", open: false }],
    };
    const action: Action = {
      type: "REMOVE_TOAST",
      toastId: "1",
    };

    const newState = reducer(initialState, action);
    expect(newState.toasts).toHaveLength(0);
  });
});


it("should create a toast with unique id and return functions", () => {
  const toastInstance = toast({
    title: "Test Toast",
    description: "This is a test toast",
  });

  expect(toastInstance).toHaveProperty("id");
  expect(toastInstance).toHaveProperty("dismiss");
  expect(toastInstance).toHaveProperty("update");
});

it("should dispatch an ADD_TOAST action when called", () => {
  const dispatchSpy = vi.fn();
  const originalDispatch = (global as unknown as { dispatch: (action: Action) => void }).dispatch;
  (global as unknown as { dispatch: (action: Action) => void }).dispatch = dispatchSpy;
  toast({ title: "Test Toast", description: "This is a test toast" });
  (global as unknown as { dispatch: (action: Action) => void }).dispatch = originalDispatch;
  dispatchSpy.mockRestore();
  dispatchSpy.mockRestore();
});

describe("useToast hook", () => {
    it('should return toasts state', () => {
        const { result } = renderHook(() => useToast());
      
     
        toast({ title: 'Test Toast', description: 'This is a test toast' });
  
        expect(result.current.toasts).toEqual([
          expect.objectContaining({
            title: 'Test Toast',
            description: 'This is a test toast',
          }),
        ]);
      });
      

  it("should add a toast and update state", () => {
    const { result } = renderHook(() => useToast());
    act(() => {
      result.current.toast({
        title: "Test Toast",
        description: "New toast added",
      });
    });
    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].title).toBe("Test Toast");
  });

  it("should dismiss a toast and update state", () => {
    const { result } = renderHook(() => useToast());
    act(() => {
      const toastInstance = result.current.toast({ title: "Test Toast" });
      toastInstance.dismiss();
    });
    expect(result.current.toasts[0].open).toBe(false);
  });
});
