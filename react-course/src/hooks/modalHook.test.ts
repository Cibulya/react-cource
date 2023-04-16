import { act, renderHook } from '@testing-library/react';
import useModal from './modalHook';

test('useModal tests here', () => {
    const { result } = renderHook(() => useModal());
    act(result.current.toggle);
    expect(result.current.isOpen).toBe(true);
});
