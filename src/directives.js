// Custom directives

export const limit = {
  mounted(el, binding) {
    const [min, max] = binding.value;
    el = el.querySelector('input') ?? el.querySelector('textarea');
    const minAttr = ['number', 'date'].includes(el.type) ? 'min' : 'minlength';
    const maxAttr = ['number', 'date'].includes(el.type) ? 'max' : 'maxlength';
    
    el.setAttribute(minAttr, min);
    el.setAttribute(maxAttr, max);
  }
}