/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/9.0.90
 * Generated at: 2024-09-08 17:30:05 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.errors;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import com.liferay.portal.internal.errors.DynamicIncludeKeyUtil;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.model.LayoutSet;
import com.liferay.portal.kernel.servlet.HttpHeaders;
import com.liferay.portal.kernel.util.GetterUtil;
import com.liferay.portal.kernel.util.HtmlUtil;
import com.liferay.portal.kernel.util.JavaConstants;
import com.liferay.portal.kernel.util.PortalUtil;
import com.liferay.portal.kernel.util.StringUtil;
import com.liferay.portal.kernel.util.Validator;
import com.liferay.portal.kernel.util.WebKeys;

public final class code_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {


private static final Log _log = LogFactoryUtil.getLog("portal_web.docroot.errors.code_jsp");

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.HashMap<java.lang.String,java.lang.Long>(4);
    _jspx_dependants.put("/WEB-INF/tld/liferay-ui.tld", Long.valueOf(1722847749000L));
    _jspx_dependants.put("/WEB-INF/tld/c.tld", Long.valueOf(1722847445000L));
    _jspx_dependants.put("/WEB-INF/tld/liferay-util.tld", Long.valueOf(1722847495000L));
    _jspx_dependants.put("/errors/init.jsp", Long.valueOf(1722847495000L));
  }

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.LinkedHashSet<>(4);
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = new java.util.LinkedHashSet<>(16);
    _jspx_imports_classes.add("com.liferay.portal.internal.errors.DynamicIncludeKeyUtil");
    _jspx_imports_classes.add("com.liferay.portal.kernel.util.HtmlUtil");
    _jspx_imports_classes.add("com.liferay.portal.kernel.servlet.HttpHeaders");
    _jspx_imports_classes.add("com.liferay.portal.kernel.log.LogFactoryUtil");
    _jspx_imports_classes.add("com.liferay.portal.kernel.util.JavaConstants");
    _jspx_imports_classes.add("com.liferay.portal.kernel.model.LayoutSet");
    _jspx_imports_classes.add("com.liferay.portal.kernel.util.PortalUtil");
    _jspx_imports_classes.add("com.liferay.portal.kernel.util.Validator");
    _jspx_imports_classes.add("com.liferay.portal.kernel.util.WebKeys");
    _jspx_imports_classes.add("com.liferay.portal.kernel.util.GetterUtil");
    _jspx_imports_classes.add("com.liferay.portal.kernel.util.StringUtil");
    _jspx_imports_classes.add("com.liferay.portal.kernel.log.Log");
  }

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
      throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    java.lang.Throwable exception = org.apache.jasper.runtime.JspRuntimeLibrary.getThrowable(request);
    if (exception != null) {
      response.setStatus(javax.servlet.http.HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
    }
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;



// According to http://www.webmasterworld.com/forum91/3087.htm a semicolon in
// the URL for a meta-refresh tag does not work in IE 6.

// To work around this issue, we use a URL without a session id for meta-refresh
// and rely on the load event on the body element to properly rewrite the URL.

// However, if the original request was an AJAX request, sending a redirect is
// less than ideal. In this case we will simply print the error message.

ErrorData errorData = pageContext.getErrorData();

int code = errorData.getStatusCode();

String msg = String.valueOf(request.getAttribute(JavaConstants.JAVAX_SERVLET_ERROR_MESSAGE));
String uri = errorData.getRequestURI();

if (_log.isWarnEnabled()) {
	_log.warn("{code=\"" + code + "\", msg=\"" + msg + "\", uri=" + uri + "}", exception);
}

String dynamicIncludeKey = DynamicIncludeKeyUtil.getDynamicIncludeKey(request.getHeader("Accept"));
String xRequestWith = request.getHeader(HttpHeaders.X_REQUESTED_WITH);

if (
 GetterUtil.getBoolean(request.getAttribute(WebKeys.UNKNOWN_VIRTUAL_HOST)) ) {
      if (_jspx_meth_liferay_002dui_005fmessage_005f0(_jspx_page_context))
        return;
      out.write(':');
      out.write(' ');
      out.print( PortalUtil.getHost(request) );
}
else if (
 !Validator.isBlank(dynamicIncludeKey) ) {
      //  liferay-util:dynamic-include
      com.liferay.taglib.util.DynamicIncludeTag _jspx_th_liferay_002dutil_005fdynamic_002dinclude_005f0 = new com.liferay.taglib.util.DynamicIncludeTag();
      _jsp_getInstanceManager().newInstance(_jspx_th_liferay_002dutil_005fdynamic_002dinclude_005f0);
      try {
        _jspx_th_liferay_002dutil_005fdynamic_002dinclude_005f0.setPageContext(_jspx_page_context);
        _jspx_th_liferay_002dutil_005fdynamic_002dinclude_005f0.setParent(null);
        // /errors/code.jsp(41,2) name = key type = null reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
        _jspx_th_liferay_002dutil_005fdynamic_002dinclude_005f0.setKey( dynamicIncludeKey );
        int _jspx_eval_liferay_002dutil_005fdynamic_002dinclude_005f0 = _jspx_th_liferay_002dutil_005fdynamic_002dinclude_005f0.doStartTag();
        if (_jspx_th_liferay_002dutil_005fdynamic_002dinclude_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
          return;
        }
      } finally {
        org.apache.jasper.runtime.JspRuntimeLibrary.releaseTag(_jspx_th_liferay_002dutil_005fdynamic_002dinclude_005f0, _jsp_getInstanceManager(), false);
      }
}
else if (
 !StringUtil.equalsIgnoreCase(HttpHeaders.XML_HTTP_REQUEST, xRequestWith) ) {
      out.write("<html>\n");
      out.write("\n");
      out.write("			");

			String redirect = null;

			LayoutSet layoutSet = (LayoutSet)request.getAttribute(WebKeys.VIRTUAL_HOST_LAYOUT_SET);

			if (layoutSet != null) {
				redirect = PortalUtil.getPathMain();
			}
			else {
				redirect = PortalUtil.getPortalURL(PortalUtil.getValidPortalDomain(PortalUtil.getDefaultCompanyId(), request.getServerName()), request.getServerPort(), request.isSecure()) + PortalUtil.getPathContext() + PortalUtil.getRelativeHomeURL(request);
			}

			if (!request.isRequestedSessionIdFromCookie()) {
				redirect = PortalUtil.getURLWithSessionId(redirect, session.getId());
			}
			
      out.write("<head>\n");
      out.write("				<title></title>\n");
      out.write("\n");
      out.write("				<meta content=\"1; url=");
      out.print( HtmlUtil.escapeAttribute(redirect) );
      out.write("\" http-equiv=\"refresh\" />\n");
      out.write("			</head>\n");
      out.write("\n");
      out.write("			<body onload=\"javascript:location.replace('");
      out.print( HtmlUtil.escapeJS(redirect) );
      out.write("');\">\n");
      out.write("\n");
      out.write("				<!--\n");
      out.write("				The numbers below are used to fill up space so that this works properly in IE.\n");
      out.write("				See http://support.microsoft.com/default.aspx?scid=kb;en-us;Q294807 for more\n");
      out.write("				information on why this is necessary.\n");
      out.write("\n");
      out.write("				12345678901234567890123456789012345678901234567890123456789012345678901234567890\n");
      out.write("				12345678901234567890123456789012345678901234567890123456789012345678901234567890\n");
      out.write("				12345678901234567890123456789012345678901234567890123456789012345678901234567890\n");
      out.write("				-->\n");
      out.write("			</body>\n");
      out.write("		</html>\n");
      out.write("	");
}
else {
      out.write("<html>\n");
      out.write("			<head>\n");
      out.write("				<title>Http Status ");
      out.print( code );
      out.write(' ');
      out.write('-');
      out.write(' ');
      //  liferay-ui:message
      com.liferay.taglib.ui.MessageTag _jspx_th_liferay_002dui_005fmessage_005f1 = new com.liferay.taglib.ui.MessageTag();
      _jsp_getInstanceManager().newInstance(_jspx_th_liferay_002dui_005fmessage_005f1);
      try {
        _jspx_th_liferay_002dui_005fmessage_005f1.setPageContext(_jspx_page_context);
        _jspx_th_liferay_002dui_005fmessage_005f1.setParent(null);
        // /errors/code.jsp(90,37) name = key type = null reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
        _jspx_th_liferay_002dui_005fmessage_005f1.setKey( "http-status-code[" + code + "]" );
        int _jspx_eval_liferay_002dui_005fmessage_005f1 = _jspx_th_liferay_002dui_005fmessage_005f1.doStartTag();
        if (_jspx_th_liferay_002dui_005fmessage_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
          return;
        }
      } finally {
        org.apache.jasper.runtime.JspRuntimeLibrary.releaseTag(_jspx_th_liferay_002dui_005fmessage_005f1, _jsp_getInstanceManager(), false);
      }
      out.write("</title>\n");
      out.write("			</head>\n");
      out.write("\n");
      out.write("			<body>\n");
      out.write("				<h1>Http Status ");
      out.print( code );
      out.write(' ');
      out.write('-');
      out.write(' ');
      //  liferay-ui:message
      com.liferay.taglib.ui.MessageTag _jspx_th_liferay_002dui_005fmessage_005f2 = new com.liferay.taglib.ui.MessageTag();
      _jsp_getInstanceManager().newInstance(_jspx_th_liferay_002dui_005fmessage_005f2);
      try {
        _jspx_th_liferay_002dui_005fmessage_005f2.setPageContext(_jspx_page_context);
        _jspx_th_liferay_002dui_005fmessage_005f2.setParent(null);
        // /errors/code.jsp(94,34) name = key type = null reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
        _jspx_th_liferay_002dui_005fmessage_005f2.setKey( "http-status-code[" + code + "]" );
        int _jspx_eval_liferay_002dui_005fmessage_005f2 = _jspx_th_liferay_002dui_005fmessage_005f2.doStartTag();
        if (_jspx_th_liferay_002dui_005fmessage_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
          return;
        }
      } finally {
        org.apache.jasper.runtime.JspRuntimeLibrary.releaseTag(_jspx_th_liferay_002dui_005fmessage_005f2, _jsp_getInstanceManager(), false);
      }
      out.write("</h1>\n");
      out.write("\n");
      out.write("				<p>\n");
      out.write("					");
      if (_jspx_meth_liferay_002dui_005fmessage_005f3(_jspx_page_context))
        return;
      out.write(':');
      out.write(' ');
      out.print( HtmlUtil.escape(msg) );
      out.write("</p>\n");
      out.write("\n");
      out.write("				<p>\n");
      out.write("					");
      if (_jspx_meth_liferay_002dui_005fmessage_005f4(_jspx_page_context))
        return;
      out.write(':');
      out.write(' ');
      out.print( HtmlUtil.escape(uri) );
      out.write("</p>\n");
      out.write("			</body>\n");
      out.write("		</html>\n");
      out.write("	");
}
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }

  private boolean _jspx_meth_liferay_002dui_005fmessage_005f0(javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  liferay-ui:message
    com.liferay.taglib.ui.MessageTag _jspx_th_liferay_002dui_005fmessage_005f0 = new com.liferay.taglib.ui.MessageTag();
    _jsp_getInstanceManager().newInstance(_jspx_th_liferay_002dui_005fmessage_005f0);
    try {
      _jspx_th_liferay_002dui_005fmessage_005f0.setPageContext(_jspx_page_context);
      _jspx_th_liferay_002dui_005fmessage_005f0.setParent(null);
      // /errors/code.jsp(38,2) name = key type = null reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
      _jspx_th_liferay_002dui_005fmessage_005f0.setKey("unknown-virtual-hostname");
      int _jspx_eval_liferay_002dui_005fmessage_005f0 = _jspx_th_liferay_002dui_005fmessage_005f0.doStartTag();
      if (_jspx_th_liferay_002dui_005fmessage_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        return true;
      }
    } finally {
      org.apache.jasper.runtime.JspRuntimeLibrary.releaseTag(_jspx_th_liferay_002dui_005fmessage_005f0, _jsp_getInstanceManager(), false);
    }
    return false;
  }

  private boolean _jspx_meth_liferay_002dui_005fmessage_005f3(javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  liferay-ui:message
    com.liferay.taglib.ui.MessageTag _jspx_th_liferay_002dui_005fmessage_005f3 = new com.liferay.taglib.ui.MessageTag();
    _jsp_getInstanceManager().newInstance(_jspx_th_liferay_002dui_005fmessage_005f3);
    try {
      _jspx_th_liferay_002dui_005fmessage_005f3.setPageContext(_jspx_page_context);
      _jspx_th_liferay_002dui_005fmessage_005f3.setParent(null);
      // /errors/code.jsp(97,5) name = key type = null reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
      _jspx_th_liferay_002dui_005fmessage_005f3.setKey("message");
      int _jspx_eval_liferay_002dui_005fmessage_005f3 = _jspx_th_liferay_002dui_005fmessage_005f3.doStartTag();
      if (_jspx_th_liferay_002dui_005fmessage_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        return true;
      }
    } finally {
      org.apache.jasper.runtime.JspRuntimeLibrary.releaseTag(_jspx_th_liferay_002dui_005fmessage_005f3, _jsp_getInstanceManager(), false);
    }
    return false;
  }

  private boolean _jspx_meth_liferay_002dui_005fmessage_005f4(javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  liferay-ui:message
    com.liferay.taglib.ui.MessageTag _jspx_th_liferay_002dui_005fmessage_005f4 = new com.liferay.taglib.ui.MessageTag();
    _jsp_getInstanceManager().newInstance(_jspx_th_liferay_002dui_005fmessage_005f4);
    try {
      _jspx_th_liferay_002dui_005fmessage_005f4.setPageContext(_jspx_page_context);
      _jspx_th_liferay_002dui_005fmessage_005f4.setParent(null);
      // /errors/code.jsp(101,5) name = key type = null reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
      _jspx_th_liferay_002dui_005fmessage_005f4.setKey("resource");
      int _jspx_eval_liferay_002dui_005fmessage_005f4 = _jspx_th_liferay_002dui_005fmessage_005f4.doStartTag();
      if (_jspx_th_liferay_002dui_005fmessage_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        return true;
      }
    } finally {
      org.apache.jasper.runtime.JspRuntimeLibrary.releaseTag(_jspx_th_liferay_002dui_005fmessage_005f4, _jsp_getInstanceManager(), false);
    }
    return false;
  }
}
