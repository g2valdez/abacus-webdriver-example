module.exports = ({Init, BeforeAll, BeforeEach, AfterEach, AfterAll, Shutdown}) => {
  Init((next) => {
    console.log('init hook');
    next();
  });
  BeforeAll((next) => {
    console.log('beforeAll hook');
    next();
  });
  BeforeEach((next) => {
    console.log('BeforeEach hook');
    next();
  });
  AfterEach((next) => {
    console.log('AfterEach hook');
    next();
  });
  AfterAll((next) => {
    console.log('AfterAll hook');
    next();
  });
  Shutdown((next) => {
    console.log('Shutdown hook');
    next();
  });
};
