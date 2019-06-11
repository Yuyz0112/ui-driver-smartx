"use strict";

define("nodes/components/driver-elf/component", ["exports", "shared/mixins/node-driver"], function (exports, _nodeDriver) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var LAYOUT = "PHNlY3Rpb24gY2xhc3M9Imhvcml6b250YWwtZm9ybSI+CiAge3sjYWNjb3JkaW9uLWxpc3Qgc2hvd0V4cGFuZEFsbD1mYWxzZSBhcyB8IGFsIGV4cGFuZEZuIHx9fQogIHt7IS0tIFRoaXMgbGluZSBzaG93cyB0aGUgZHJpdmVyIHRpdGxlIHdoaWNoIHlvdSBkb24ndCBoYXZlIHRvIGNoYW5nZSBpdCAtLX19CiAgPGRpdiBjbGFzcz0ib3Zlci1ociBtYi0yMCI+PHNwYW4+e3tkcml2ZXJPcHRpb25zVGl0bGV9fTwvc3Bhbj48L2Rpdj4KCiAge3shLS0gQW4gZXhhbXBsZSBpbnB1dCBvcHRpb24gLS19fQogIDxkaXYgY2xhc3M9InJvdyBib3ggbXQtMjAiPgogICAgPGg0PgogICAgICAxLiBBY2NvdW5jIEFjY2VzcwogICAgICA8ZGl2IGNsYXNzPSJkZXNjIj5Db25maWd1cmUgd2hlcmUgdG8gYWNjZXNzIFNtYXJ0WCBWaXJ0dWFsIE1hY2hpbmUgU2VydmljZSBhbmQgY3JlZGVudGlhbHM8L2Rpdj4KICAgIDwvaDQ+CiAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICA8bGFiZWwgY2xhc3M9InJlcXVpcmVkIj5TbWFydFggQ2x1c3RlciBJUCBBZGRyZXNzPC9sYWJlbD4KICAgICAgICB7e2lucHV0IHZhbHVlPWNvbmZpZy5zZXJ2ZXJ9fQogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgPGxhYmVsIGNsYXNzPSJyZXF1aXJlZCI+UG9ydDwvbGFiZWw+CiAgICAgICAge3tpbnB1dC1pbnRlZ2VyIHZhbHVlPWNvbmZpZy5wb3J0fX0KICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgIDxsYWJlbCBjbGFzcz0icmVxdWlyZWQiPlVzZXJuYW1lPC9sYWJlbD4KICAgICAgICB7e2lucHV0IHZhbHVlPWNvbmZpZy51c2VybmFtZX19CiAgICAgIDwvZGl2PgoKICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgPGxhYmVsIGNsYXNzPSJyZXF1aXJlZCI+UGFzc3dvcmQ8L2xhYmVsPgogICAgICAgIHt7aW5wdXQgdmFsdWU9Y29uZmlnLnBhc3N3b3JkIHR5cGU9InBhc3N3b3JkIn19CiAgICAgIDwvZGl2PgogICAgPC9kaXY+CiAgICA8ZGl2IGNsYXNzPSJoaW50Ij4KICAgICAgTm90ZTogVGhlIGFjY291bnQgcHJvdmlkZWQgbXVzdCBoYXMgcHJldmlsbGVnZXMgdG8gbWFuYWdlIHZpcnR1YWwKICAgICAgbWFjaGluZXMuCiAgICA8L2Rpdj4KICA8L2Rpdj4KCiAgPGRpdiBjbGFzcz0icm93IGJveCBtdC0yMCI+CiAgICA8aDQ+CiAgICAgIDIuIEluc3RhbmNlIE9wdGlvbnMKICAgICAgPGRpdiBjbGFzcz0iZGVzYyI+Q2hvb3NlIHRoZSBzaXplIGFuZCBPUyBvZiB0aGUgdmlydHVhbCBtYWNoaW5lczwvZGl2PgogICAgPC9oND4KICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgIDxsYWJlbCBjbGFzcz0icmVxdWlyZWQiPkNQVXM8L2xhYmVsPgogICAgICAgIDxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIj4KICAgICAgICAgIHt7aW5wdXQtaW50ZWdlciBtaW49MSB2YWx1ZT1jb25maWcuY3B1Q291bnR9fQogICAgICAgICAgPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAtYWRkb24gYmctZGVmYXVsdCI+Y29yZXM8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgPC9kaXY+CgogICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICA8bGFiZWwgY2xhc3M9InJlcXVpcmVkIj5NZW1vcnk8L2xhYmVsPgogICAgICAgIDxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIj4KICAgICAgICAgIHt7aW5wdXQtaW50ZWdlciBtaW49MSB2YWx1ZT1jb25maWcubWVtb3J5U2l6ZX19CiAgICAgICAgICA8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cC1hZGRvbiBiZy1kZWZhdWx0Ij5NaUI8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KCiAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICA8bGFiZWwgY2xhc3M9InJlcXVpcmVkIj5EaXNrPC9sYWJlbD4KICAgICAgICA8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCI+CiAgICAgICAgICB7e2lucHV0LWludGVnZXIgbWluPTEgdmFsdWU9Y29uZmlnLmRpc2tTaXplfX0KICAgICAgICAgIDxkaXYgY2xhc3M9ImlucHV0LWdyb3VwLWFkZG9uIGJnLWRlZmF1bHQiPk1pQjwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KCiAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgIDxsYWJlbCBjbGFzcz0icmVxdWlyZWQiPlN0b3JhZ2UgUG9saWN5PC9sYWJlbD4KICAgICAgICB7e2lucHV0IHZhbHVlPWNvbmZpZy5zdG9yYWdlUG9saWN5TmFtZX19CiAgICAgICAgPGRpdiBjbGFzcz0iaGludCI+Tm90ZTogU3BlY2lmeSB0aGUgZXhhY3QgbmFtZSBvZiB0aGUgc3RvcmFnZSBwb2xpY3kgaW4geW91ciBTbWFydFggY2x1c3Rlci48L2Rpdj4KICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KCiAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICA8bGFiZWwgY2xhc3M9InJlcXVpcmVkIj5PUyBJbWFnZSBVUkw8L2xhYmVsPgogICAgICB7e2lucHV0IHZhbHVlPWNvbmZpZy5kb2NrZXJvc0ltYWdlVXJsfX0KICAgICAgPGRpdiBjbGFzcz0iaGludCI+Tm90ZTogVXBsb2FkIHRoZSBTbWFydFggRG9ja2VyIE9TIEltYWdlIHRvIGEgTkZTIGRhdGFzdG9yZSBpbiB5b3VyIFNtYXJ0WAogICAgICAgIGNsdXN0ZXIuIFRoZW4gaW5wdXQgdGhlIFVSTCBvZiB0aGUgaW1hZ2UgZmlsZSBoZXJlLiBUaGUgVVJMIGlzIGZvcm1hdGVkIGFzCiAgICAgICAgZGF0YXN0b3JlLW5hbWUvZmlsZS1wYXRoLgogICAgICA8L2Rpdj4KICAgIDwvZGl2PgogIDwvZGl2PgoKICA8ZGl2IGNsYXNzPSJyb3cgYm94IG10LTIwIj4KICAgIDxoND4KICAgICAgMy4gSW5zdGFuY2UgT3B0aW9ucwogICAgICA8ZGl2IGNsYXNzPSJkZXNjIj5DaG9vc2Ugc2NoZWR1bGluZyBwcmVmZXJlbmNlcyBvZiB0aGUgdmlydHVhbCBtYWNoaW5lczwvZGl2PgogICAgPC9oND4KCiAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICA8bGFiZWwgY2xhc3M9InJlcXVpcmVkIj5OZXR3b3JrPC9sYWJlbD4KICAgICAgICB7e2lucHV0IHZhbHVlPWNvbmZpZy5uZXR3b3JrTmFtZX19CiAgICAgICAgPGRpdiBjbGFzcz0iaGludCI+CiAgICAgICAgICBOb3RlOiBTcGVjaWZ5IHRoZSBleGFjdCBuYW1lIG9mIHRoZSBWTSBuZXR3b3JrIGluIHlvdXIgU21hcnRYIGNsdXN0ZXIuCiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgoKICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgPGxhYmVsPkhBPC9sYWJlbD4KICAgICAgICA8ZGl2IGNsYXNzPSJzd2l0Y2giPgogICAgICAgICAge3tpbnB1dCBjaGVja2VkPWNvbmZpZy5oYSB0eXBlPSJjaGVja2JveCIgbmFtZT0iaGEiIGlkPSJoYSJ9fQogICAgICAgICAgPGxhYmVsIGZvcj0iaGEiPjwvbGFiZWw+CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgogICAgPC9kaXY+CiAgPC9kaXY+CgogIHt7IS0tIFRoaXMgZm9sbG93aW5nIGNvbnRhaW5zIHRoZSBOYW1lLCBMYWJlbHMgYW5kIEVuZ2luZSBPcHRpb25zIGZpZWxkcyAtLX19CiAgPGRpdiBjbGFzcz0ib3Zlci1ociI+PHNwYW4+e3t0ZW1wbGF0ZU9wdGlvbnNUaXRsZX19PC9zcGFuPjwvZGl2PgoKICB7e2Zvcm0tbmFtZS1kZXNjcmlwdGlvbgogICAgICBtb2RlbD1tb2RlbAogICAgICBuYW1lUmVxdWlyZWQ9dHJ1ZQogICAgfX0KCiAge3tmb3JtLXVzZXItbGFiZWxzCiAgICAgIGluaXRpYWxMYWJlbHM9bGFiZWxSZXNvdXJjZS5sYWJlbHMKICAgICAgc2V0TGFiZWxzPShhY3Rpb24gJ3NldExhYmVscycpCiAgICAgIGV4cGFuZEFsbD1leHBhbmRBbGwKICAgICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgICB9fQoKICB7e2Zvcm0tZW5naW5lLW9wdHMKICAgICAgbWFjaGluZT1tb2RlbAogICAgICBzaG93RW5naW5lVXJsPXNob3dFbmdpbmVVcmwKICAgIH19CiAge3svYWNjb3JkaW9uLWxpc3R9fQoKICB7eyEtLSBUaGlzIGNvbXBvbmVudCBzaG93cyBlcnJvcnMgcHJvZHVjZWQgYnkgdmFsaWRhdGUoKSBpbiB0aGUgY29tcG9uZW50IC0tfX0KICB7e3RvcC1lcnJvcnMgZXJyb3JzPWVycm9yc319CgogIHt7IS0tIFRoaXMgY29tcG9uZW50IHNob3dzIHRoZSBDcmVhdGUgYW5kIENhbmNlbCBidXR0b25zIC0tfX0KICB7e3NhdmUtY2FuY2VsIHNhdmU9InNhdmUiIGNhbmNlbD0iY2FuY2VsIn19Cjwvc2VjdGlvbj4=";
  var computed = Ember.computed;
  var get = Ember.get;
  var set = Ember.set;
  var alias = Ember.computed.alias;
  var service = Ember.inject.service;
  var defaultRadix = 10;
  var defaultBase = 1024;
  exports.default = Ember.Component.extend(_nodeDriver.default, {
    driverName: 'elf',
    config: alias('model.elfConfig'),
    app: service(),
    init: function init() {
      var decodedLayout = window.atob(LAYOUT);
      var template = Ember.HTMLBars.compile(decodedLayout, {
        moduleName: 'nodes/components/driver-elf/template'
      });
      set(this, 'layout', template);

      this._super.apply(this, arguments);
    },
    bootstrap: function bootstrap() {
      var config = get(this, 'globalStore').createRecord({
        type: 'elfConfig',
        server: '',
        port: '',
        username: '',
        password: '',
        cpuCount: 2,
        memorySize: 4096,
        diskSize: 10240,
        storagePolicyName: 'default',
        dockerosImageUrl: '',
        networkName: 'default',
        ha: false
      });
      set(this, 'model.elfConfig', config);
    },
    validate: function validate() {
      var _this = this;

      this._super();

      var errors = get(this, 'errors') || [];
      var fields = [{
        key: 'server',
        title: 'IP address'
      }, {
        key: 'port',
        title: 'Port'
      }, {
        key: 'username',
        title: 'Username'
      }, {
        key: 'password',
        title: 'Password'
      }, {
        key: 'cpuCount',
        title: 'CPUs'
      }, {
        key: 'memorySize',
        title: 'Memory'
      }, {
        key: 'diskSize',
        title: 'Disk'
      }, {
        key: 'storagePolicyName',
        title: 'Storage policy'
      }, {
        key: 'dockerosImageUrl',
        title: 'OS image URL'
      }, {
        key: 'networkName',
        title: 'Network'
      }];
      fields.forEach(function (field) {
        if (!get(_this, "model.elfConfig.".concat(field.key))) {
          errors.push("".concat(field.title, " is required"));
        }
      });

      if (get(errors, 'length')) {
        set(this, 'errors', errors);
        return false;
      } else {
        set(this, 'errors', null);
        return true;
      }
    }
  });
});;
"use strict";

define("ui/components/driver-elf/component", ["exports", "nodes/components/driver-elf/component"], function (exports, _component) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});