"use strict";

define("nodes/components/driver-smtxos/component", ["exports", "shared/mixins/node-driver"], function (exports, _nodeDriver) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var LAYOUT = "PHNlY3Rpb24gY2xhc3M9Imhvcml6b250YWwtZm9ybSBzbXR4b3MtZm9ybSI+CiAge3sjYWNjb3JkaW9uLWxpc3Qgc2hvd0V4cGFuZEFsbD1mYWxzZSBhcyB8IGFsIGV4cGFuZEZuIHx9fQogIHt7IS0tIFRoaXMgbGluZSBzaG93cyB0aGUgZHJpdmVyIHRpdGxlIHdoaWNoIHlvdSBkb24ndCBoYXZlIHRvIGNoYW5nZSBpdCAtLX19CiAgPGRpdiBjbGFzcz0ib3Zlci1ociBtYi0yMCI+PHNwYW4+e3tkcml2ZXJPcHRpb25zVGl0bGV9fTwvc3Bhbj48L2Rpdj4KCiAge3shLS0gQW4gZXhhbXBsZSBpbnB1dCBvcHRpb24gLS19fQogIDxkaXYgY2xhc3M9InJvdyBib3ggbXQtMjAiPgogICAgPGhlYWRlciBvbmNsaWNrPXt7YWN0aW9uICJ0b2dnbGUiICJhY2NvdW50In19PgogICAgICA8aSByb2xlPSJidXR0b24iCiAgICAgICAgY2xhc3M9Int7aWYgY29sbGFwc2VNYXAuYWNjb3VudCAiaWNvbiBpY29uLXBsYXkgZWFzZWQgYnRuIGJnLXRyYW5zcGFyZW50IGljb24tcm90YXRlLTkwIiAiaWNvbiBpY29uLXBsYXkgZWFzZWQgYnRuIGJnLXRyYW5zcGFyZW50In19Ij4KICAgICAgICA8c3BhbiBjbGFzcz0idmlzdWFsbHktaGlkZGVuIj5PcGVuIGFjY29yZGlvbjwvc3Bhbj4KICAgICAgPC9pPgogICAgICA8aDQ+CiAgICAgICAgMS4gQWNjb3VudCBBY2Nlc3MKICAgICAgICA8ZGl2IGNsYXNzPSJkZXNjIj5Db25maWd1cmUgd2hlcmUgdG8gYWNjZXNzIFNtYXJ0WCBWaXJ0dWFsIE1hY2hpbmUgU2VydmljZSBhbmQgY3JlZGVudGlhbHM8L2Rpdj4KICAgICAgPC9oND4KICAgIDwvaGVhZGVyPgogICAge3sjaWYgdGhpcy5jb2xsYXBzZU1hcC5hY2NvdW50fX0KICAgIDxtYWluPgogICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgPGxhYmVsIGNsYXNzPSJyZXF1aXJlZCI+U21hcnRYIENsdXN0ZXIgSVAgQWRkcmVzczwvbGFiZWw+CiAgICAgICAgICB7e2lucHV0IHZhbHVlPWNvbmZpZy5zZXJ2ZXJ9fQogICAgICAgIDwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgPGxhYmVsIGNsYXNzPSJyZXF1aXJlZCI+UG9ydDwvbGFiZWw+CiAgICAgICAgICB7e2lucHV0LWludGVnZXIgdmFsdWU9Y29uZmlnLnBvcnR9fQogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgIDxsYWJlbCBjbGFzcz0icmVxdWlyZWQiPlVzZXJuYW1lPC9sYWJlbD4KICAgICAgICAgIHt7aW5wdXQgdmFsdWU9Y29uZmlnLnVzZXJuYW1lfX0KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICA8bGFiZWwgY2xhc3M9InJlcXVpcmVkIj5QYXNzd29yZDwvbGFiZWw+CiAgICAgICAgICB7e2lucHV0IHZhbHVlPWNvbmZpZy5wYXNzd29yZCB0eXBlPSJwYXNzd29yZCJ9fQogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0iaGludCI+CiAgICAgICAgTm90ZTogVGhlIGFjY291bnQgcHJvdmlkZWQgbXVzdCBoYXMgcHJldmlsbGVnZXMgdG8gbWFuYWdlIHZpcnR1YWwKICAgICAgICBtYWNoaW5lcy4KICAgICAgPC9kaXY+CiAgICA8L21haW4+CiAgICB7ey9pZn19CiAgPC9kaXY+CgogIDxkaXYgY2xhc3M9InJvdyBib3ggbXQtMjAiPgogICAgPGhlYWRlciBvbmNsaWNrPXt7YWN0aW9uICJ0b2dnbGUiICJpbnN0YW5jZSJ9fT4KICAgICAgPGkgcm9sZT0iYnV0dG9uIgogICAgICAgIGNsYXNzPSJ7e2lmIGNvbGxhcHNlTWFwLmluc3RhbmNlICJpY29uIGljb24tcGxheSBlYXNlZCBidG4gYmctdHJhbnNwYXJlbnQgaWNvbi1yb3RhdGUtOTAiICJpY29uIGljb24tcGxheSBlYXNlZCBidG4gYmctdHJhbnNwYXJlbnQifX0iPgogICAgICAgIDxzcGFuIGNsYXNzPSJ2aXN1YWxseS1oaWRkZW4iPk9wZW4gYWNjb3JkaW9uPC9zcGFuPgogICAgICA8L2k+CiAgICAgIDxoND4KICAgICAgICAyLiBJbnN0YW5jZSBPcHRpb25zCiAgICAgICAgPGRpdiBjbGFzcz0iZGVzYyI+Q2hvb3NlIHRoZSBzaXplIGFuZCBPUyBvZiB0aGUgdmlydHVhbCBtYWNoaW5lczwvZGl2PgogICAgICA8L2g0PgogICAgPC9oZWFkZXI+CiAgICB7eyNpZiB0aGlzLmNvbGxhcHNlTWFwLmluc3RhbmNlfX0KICAgIDxtYWluPgogICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgPGxhYmVsIGNsYXNzPSJyZXF1aXJlZCI+Q1BVczwvbGFiZWw+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCI+CiAgICAgICAgICAgIHt7aW5wdXQtaW50ZWdlciBtaW49MSB2YWx1ZT1jb25maWcuY3B1Q291bnR9fQogICAgICAgICAgICA8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cC1hZGRvbiBiZy1kZWZhdWx0Ij5jb3JlczwvZGl2PgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CgogICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgPGxhYmVsIGNsYXNzPSJyZXF1aXJlZCI+TWVtb3J5PC9sYWJlbD4KICAgICAgICAgIDxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIj4KICAgICAgICAgICAge3tpbnB1dC1pbnRlZ2VyIG1pbj0xIHZhbHVlPWNvbmZpZy5tZW1vcnlTaXplfX0KICAgICAgICAgICAgPGRpdiBjbGFzcz0iaW5wdXQtZ3JvdXAtYWRkb24gYmctZGVmYXVsdCI+TWlCPC9kaXY+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgPC9kaXY+CgogICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgPGxhYmVsIGNsYXNzPSJyZXF1aXJlZCI+RGlzazwvbGFiZWw+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCI+CiAgICAgICAgICAgIHt7aW5wdXQtaW50ZWdlciBtaW49MSB2YWx1ZT1jb25maWcuZGlza1NpemV9fQogICAgICAgICAgICA8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cC1hZGRvbiBiZy1kZWZhdWx0Ij5NaUI8L2Rpdj4KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgoKICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgIDxsYWJlbCBjbGFzcz0icmVxdWlyZWQiPlN0b3JhZ2UgUG9saWN5PC9sYWJlbD4KICAgICAgICAgIHt7aW5wdXQgdmFsdWU9Y29uZmlnLnN0b3JhZ2VQb2xpY3lOYW1lfX0KICAgICAgICAgIDxkaXYgY2xhc3M9ImhpbnQiPk5vdGU6IFNwZWNpZnkgdGhlIGV4YWN0IG5hbWUgb2YgdGhlIHN0b3JhZ2UgcG9saWN5IGluIHlvdXIgU21hcnRYIGNsdXN0ZXIuPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgoKICAgICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICA8bGFiZWwgY2xhc3M9InJlcXVpcmVkIj5PUyBJbWFnZSBQYXRoPC9sYWJlbD4KICAgICAgICB7e2lucHV0IHZhbHVlPWNvbmZpZy5kb2NrZXJvc0ltYWdlUGF0aH19CiAgICAgICAgPGRpdiBjbGFzcz0iaGludCI+Tm90ZTogVXBsb2FkIHRoZSBTbWFydFggRG9ja2VyT1MgSW1hZ2UgdG8gYSBORlMgZGF0YXN0b3JlIGluIHlvdXIgU21hcnRYIGNsdXN0ZXIuIFRoZW4gaW5wdXQKICAgICAgICAgIHRoZQogICAgICAgICAgcGF0aCBvZiB0aGUgaW1hZ2UgZmlsZSBoZXJlLiBUaGUgcGF0aCBzaG91bGQgYmUgZm9ybWF0ZWQgYXMgW2RhdGFzdG9yZS1uYW1lXS9maWxlLXBhdGguCiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgogICAgPC9tYWluPgogICAge3svaWZ9fQogIDwvZGl2PgoKICA8ZGl2IGNsYXNzPSJyb3cgYm94IG10LTIwIj4KICAgIDxoZWFkZXIgb25jbGljaz17e2FjdGlvbiAidG9nZ2xlIiAic2NoZWR1bGluZyJ9fT4KICAgICAgPGkgcm9sZT0iYnV0dG9uIgogICAgICAgIGNsYXNzPSJ7e2lmIGNvbGxhcHNlTWFwLnNjaGVkdWxpbmcgImljb24gaWNvbi1wbGF5IGVhc2VkIGJ0biBiZy10cmFuc3BhcmVudCBpY29uLXJvdGF0ZS05MCIgImljb24gaWNvbi1wbGF5IGVhc2VkIGJ0biBiZy10cmFuc3BhcmVudCJ9fSI+CiAgICAgICAgPHNwYW4gY2xhc3M9InZpc3VhbGx5LWhpZGRlbiI+T3BlbiBhY2NvcmRpb248L3NwYW4+CiAgICAgIDwvaT4KICAgICAgPGg0PgogICAgICAgIDMuIFNjaGVkdWxpbmcKICAgICAgICA8ZGl2IGNsYXNzPSJkZXNjIj5DaG9vc2Ugc2NoZWR1bGluZyBwcmVmZXJlbmNlcyBvZiB0aGUgdmlydHVhbCBtYWNoaW5lczwvZGl2PgogICAgICA8L2g0PgogICAgPC9oZWFkZXI+CiAgICB7eyNpZiB0aGlzLmNvbGxhcHNlTWFwLnNjaGVkdWxpbmd9fQogICAgPG1haW4+CiAgICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICA8bGFiZWwgY2xhc3M9InJlcXVpcmVkIj5OZXR3b3JrPC9sYWJlbD4KICAgICAgICAgIHt7aW5wdXQgdmFsdWU9Y29uZmlnLm5ldHdvcmtOYW1lfX0KICAgICAgICAgIDxkaXYgY2xhc3M9ImhpbnQiPgogICAgICAgICAgICBOb3RlOiBTcGVjaWZ5IHRoZSBleGFjdCBuYW1lIG9mIHRoZSBWTSBuZXR3b3JrIGluIHlvdXIgU21hcnRYIGNsdXN0ZXIuCiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICA8bGFiZWw+SEE8L2xhYmVsPgogICAgICAgICAgPGRpdiBjbGFzcz0ic3dpdGNoIj4KICAgICAgICAgICAge3tpbnB1dCBjaGVja2VkPWNvbmZpZy5oYSB0eXBlPSJjaGVja2JveCIgbmFtZT0iaGEiIGlkPSJoYSJ9fQogICAgICAgICAgICA8bGFiZWwgZm9yPSJoYSI+PC9sYWJlbD4KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KICAgIDwvbWFpbj4KICAgIHt7L2lmfX0KICA8L2Rpdj4KCiAge3shLS0gVGhpcyBmb2xsb3dpbmcgY29udGFpbnMgdGhlIE5hbWUsIExhYmVscyBhbmQgRW5naW5lIE9wdGlvbnMgZmllbGRzIC0tfX0KICA8ZGl2IGNsYXNzPSJvdmVyLWhyIj48c3Bhbj57e3RlbXBsYXRlT3B0aW9uc1RpdGxlfX08L3NwYW4+PC9kaXY+CgogIHt7Zm9ybS1uYW1lLWRlc2NyaXB0aW9uCiAgICAgIG1vZGVsPW1vZGVsCiAgICAgIG5hbWVSZXF1aXJlZD10cnVlCiAgICB9fQoKICB7e2Zvcm0tdXNlci1sYWJlbHMKICAgICAgaW5pdGlhbExhYmVscz1sYWJlbFJlc291cmNlLmxhYmVscwogICAgICBzZXRMYWJlbHM9KGFjdGlvbiAnc2V0TGFiZWxzJykKICAgICAgZXhwYW5kQWxsPWV4cGFuZEFsbAogICAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgIH19CgogIHt7Zm9ybS1lbmdpbmUtb3B0cwogICAgICBtYWNoaW5lPW1vZGVsCiAgICAgIHNob3dFbmdpbmVVcmw9c2hvd0VuZ2luZVVybAogICAgfX0KICB7ey9hY2NvcmRpb24tbGlzdH19CgogIHt7IS0tIFRoaXMgY29tcG9uZW50IHNob3dzIGVycm9ycyBwcm9kdWNlZCBieSB2YWxpZGF0ZSgpIGluIHRoZSBjb21wb25lbnQgLS19fQogIHt7dG9wLWVycm9ycyBlcnJvcnM9ZXJyb3JzfX0KCiAge3shLS0gVGhpcyBjb21wb25lbnQgc2hvd3MgdGhlIENyZWF0ZSBhbmQgQ2FuY2VsIGJ1dHRvbnMgLS19fQogIHt7c2F2ZS1jYW5jZWwgc2F2ZT0ic2F2ZSIgY2FuY2VsPSJjYW5jZWwifX0KPC9zZWN0aW9uPg==";
  var computed = Ember.computed;
  var get = Ember.get;
  var set = Ember.set;
  var alias = Ember.computed.alias;
  var service = Ember.inject.service;
  var defaultRadix = 10;
  var defaultBase = 1024;
  exports.default = Ember.Component.extend(_nodeDriver.default, {
    driverName: 'smtxos',
    config: alias('model.smtxosConfig'),
    app: service(),
    init: function init() {
      var decodedLayout = window.atob(LAYOUT);
      var template = Ember.HTMLBars.compile(decodedLayout, {
        moduleName: 'nodes/components/driver-smtxos/template'
      });
      set(this, 'layout', template);

      this._super.apply(this, arguments);
    },
    bootstrap: function bootstrap() {
      var config = get(this, 'globalStore').createRecord({
        type: 'smtxosConfig',
        ha: false
      });
      set(this, 'model.smtxosConfig', config);
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
        key: 'dockerosImagePath',
        title: 'OS image path'
      }, {
        key: 'networkName',
        title: 'Network'
      }];
      fields.forEach(function (field) {
        if (!get(_this, "model.smtxosConfig.".concat(field.key))) {
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
    },
    collapseMap: {
      account: true,
      instance: true,
      scheduling: true
    },
    actions: {
      toggle: function toggle(key) {
        var collapseMap = get(this, "collapseMap");
        collapseMap[key] = !collapseMap[key];
        set(this, "collapseMap", _objectSpread({}, collapseMap));
      }
    }
  });
});;
"use strict";

define("ui/components/driver-smtxos/component", ["exports", "nodes/components/driver-smtxos/component"], function (exports, _component) {
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