// Should not compile.

function* gen() {
  yield 1;
}

for (var i = 0 of gen()) {
}
